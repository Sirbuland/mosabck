module SmsVerifiable
  extend ActiveSupport::Concern

  included do
    after_create :generate_pin

    def generate_pin
      self.pin = rand(0o4..9999).to_s.rjust(4, '0')
    end

    def verify_sms(entered_pin)
      update(sms_verified: true) if pin == entered_pin
    end

    def sms_verification_enabled
      sms_enabled = AppSetting.find_by_name('SMSVerificationEnabled')
      sms_enabled.present? && sms_enabled.try(:value) == 'true' &&
        sms_enabled.try(:active)
    end
  end
end
