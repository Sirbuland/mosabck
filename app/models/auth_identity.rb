class AuthIdentity < ApplicationRecord
  # include Searchable
  IDENTITY_TYPES = { classic: 'classic_identity',
                     facebook: 'facebook_identity',
                     phone: 'phone_identity' }.freeze

  CHANNELS = {
    phone: :phone,
    email: :classic
  }.freeze

  belongs_to :user

  validates_with FacebookIdentityValidator, if: :facebook_type?

  IDENTITY_TYPES.each do |identity, type|
    scope identity, -> { where(type: "AuthIdentities::#{type.camelize}") }
  end

  scope :by_facebook_user_id, (lambda do |fb_user_id|
    facebook.where("payload->>'facebookUserId' = ?", fb_user_id)
  end)

  scope :active, -> { where(status: 'active') }

  # searchkick
  #
  def self.find_by_channel(user, channel)
    identities = user.auth_identities.active
    identity_type = CHANNELS[channel.downcase.to_sym]
    identities.public_send(identity_type).first
  end

  def update_attribute_inside_payload(key, value)
    key = key.to_s unless key.is_a?(String)
    payload[key] = value if payload[key].present?
    save
  end

  def facebook_type?
    type == 'AuthIdentities::FacebookIdentity'
  end

  def payload_value_for(key)
    payload[key]
  end
end
