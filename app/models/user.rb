class User < ApplicationRecord
  # include Searchable
  include Solr::UserSearchable
  include MultipleIdentities
  include GeoTaggable
  #  TODO: Re-enable when Notifications are there
  # include SmsVerifiable
  # include EmailConfirmable

  has_many :auth_identities, dependent: :destroy
  has_many :posts, dependent: :destroy
  has_many :user_devices, dependent: :destroy
  has_many :events, dependent: :destroy
  has_many :contact_methods, dependent: :destroy
  has_many :payment_identities
  has_many :installations
  has_many :subscriptions
  has_many :orders
  has_many :tracked_events
  has_many :pin_codes

  has_many :referrals, foreign_key: :owner_id
  has_many :referral_users, through: :referrals, source: 'user',
                            class_name: 'User'
  has_one :referral, foreign_key: :user_id
  has_one :referrer, through: :referral, source: 'owner', class_name: 'User'

  accepts_nested_attributes_for :auth_identities

  validates :username, presence: true, uniqueness: true
  validates :avatar_url, url: { allow_blank: true }
  validates_email_format_of :email, allow_blank: true

  # searchkick word_middle: [:username, :email]

  def email_contact_method
    emails = contact_methods.email
    email = emails.where(main: true).first
    email.present? ? email : emails.first
  end

  def email
    emails = contact_methods.email
    email = emails.where(main: true).first
    email.present? ? email.value : emails.first.try(:value)
  end

  def email=(email)
    email = Email.create(value: email)
    contact_methods << email
  end

  def liked_entities
    ActsAsVotable::Vote.up.for_type('Post').by_type('User').where(voter_id: id)
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

  def chat_user_id
    chat_identity = auth_identities.chat.first
    return email unless chat_identity.present?
    chat_identity.payload['user_id'] || email
  end

  def chat_username
    chat_identity = auth_identities.chat.first
    return email unless chat_identity.present?
    chat_identity.payload['username'] || email
  end

  def chat_password
    chat_identity = auth_identities.chat.first
    return email unless chat_identity.present?
    chat_identity.payload['password'] || ''
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

  def admin?
    role == 'admin'
  end

  def blocked?
    role != 'blocked'
  end
end
