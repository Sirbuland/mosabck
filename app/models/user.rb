class User < ApplicationRecord
  include MultipleIdentities
  include GeoTaggable
  #  TODO: Re-enable when Notifications are there
  # include SmsVerifiable
  include EmailConfirmable
  # user will act as voter for votables
  acts_as_voter
  # user profile avatar
  mount_uploader :avatar, AvatarUploader

  attribute :avatar_url

  has_many :auth_identities, dependent: :destroy
  has_many :user_devices, dependent: :destroy
  has_many :contact_methods, dependent: :destroy
  has_many :installations, dependent: :destroy
  has_many :pin_codes, dependent: :destroy

  has_many :referrals, foreign_key: :owner_id
  has_many :referral_users, through: :referrals, source: 'user',
                            class_name: 'User'
  has_one :referral, foreign_key: :user_id
  has_one :referrer, through: :referral, source: 'owner', class_name: 'User'

  has_and_belongs_to_many :roles
  has_many :screeners
  has_many :dashboards
  has_many :address_trackers
  has_many :merchants
  has_many :events
  has_many :wallets
  has_many :researches
  has_many :videos

  scope :role_is, ->(role) { joins(:roles).where('roles.name' => role.to_s) }
  scope :admins, -> { role_is('admin') }

  accepts_nested_attributes_for :auth_identities

  validates :username, uniqueness: true, allow_blank: true
  # validates :avatar_url, url: { allow_blank: true }
  # searchkick word_middle: [:username, :email]

  def self.find_by_email(email)
    AuthIdentities::ClassicIdentity.by_email(email).first.user
  end

  def email_contact_method
    emails = contact_methods.email
    email = emails.where(main: true).first
    email.present? ? email : emails.first
  end

  def email
    @email ||= (auth_identities.classic&.first&.payload || {})['email']
  end

  # TODO: WE HAVE TWO DIFFERENT EMAIL IN CLASSICIDENTITY AND IN CONTACTMETHODS
  def email=(email)
    # update_classic_identity_email(email)
    email = Email.create(value: email)
    contact_methods << email
    email
  end

  def owned_device(device_id)
    user_devices.find_by(device_id: device_id)
  end

  def own_device?(device_id)
    user_devices.find_by(device_id: device_id).present?
  end

  def fb_token
    facebook_identity = auth_identities.facebook.first
    return unless facebook_identity.present?
    facebook_identity.payload['fbAccessToken']
  end

  def fb_user_id
    facebook_identity = auth_identities.facebook.first
    return unless facebook_identity.present?
    facebook_identity.payload['fbUserId']
  end

  def oauth_user_id(oauth_type)
    identity_type = GraphqlHelper::OAUTH_USER_TYPES.invert[oauth_type]
    identity = auth_identities.send(identity_type).first
    return unless identity.present?
    identity.oauth_user_id
  end

  def oauth_user_token(oauth_type)
    identity_type = GraphqlHelper::OAUTH_USER_TYPES.invert[oauth_type]
    identity = auth_identities.send(identity_type).first
    return unless identity.present?
    identity.oauth_user_token
  end

  def logged_in(device_id)
    device = user_devices.find_by(device_id: device_id)
    return false unless device.present?
    device.logged_in
  end

  def role?(role_to_check)
    role_to_check = role_to_check.to_s
    roles.any? { |role| role.name == role_to_check }
  end

  def avatar_url
    avatar.url if avatar.present?
  end
end
