class PinCode < ApplicationRecord
  belongs_to :user
  belongs_to :auth_identity

  after_create :send_notification

  scope :active, -> { where(status: 'active') }

  scope :by_auth_identity_id_and_pin, (lambda do |auth_identity_id, pin|
    where(auth_identity_id: auth_identity_id, value: pin)
  end)

  METHODS = {
    PinCodeNumeric: :random_dec,
    PinCodeHex: :random_hex,
    Pin64: :random
  }.freeze

  def send_notification
    data = {
      user: user,
      message: I18n.t('sms.pin_message', pin: value),
      date: Time.zone.now + 2.second
    }
    # TODO: Add notifications component
    #Notification.create(data.merge(channel: :email)) if email?
    #Notification.create(data.merge(channel: :phone)) if phone?
  end

  private

  def phone?
    %w[activate_phone reset_password_phone].include?(action)
  end

  def email?
    %w[activate_email reset_password_email].include?(action)
  end

  class << self
    def unused_pin_code
      setting = AppSetting.where(active: true, name: METHODS.keys).first
      key = setting.present? ? setting.name : :PinCodeNumeric
      public_send(METHODS[key.to_sym])
    end

    def random_dec
      collision = true
      pin_length = pin_code_length.to_i - 1
      min = 10**pin_length
      max = 10**(pin_length + 1)
      while collision
        pin_code = Random.new.rand(min..max)
        collision = PinCode.where(value: pin_code, status: :active).exists?
      end
      pin_code
    end

    def random_hex
      collision = true
      pin_length = pin_code_length.to_i - 1
      while collision
        pin_code = SecureRandom.hex(pin_length / 2)
        collision = PinCode.where(value: pin_code, status: :active).exists?
      end
      pin_code
    end

    def random
      collision = true
      pin_length = pin_code_length.to_i - 1
      while collision
        pin_code = SecureRandom.base64(pin_length).chars[0..pin_length].join
        collision = PinCode.where(value: pin_code, status: :active).exists?
      end
      pin_code
    end

    def pin_code_length
      setting = AppSetting.active.where(name: 'PinCodeLength').take
      setting.present? ? setting.value : 4
    end
  end
end
