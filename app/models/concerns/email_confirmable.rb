module EmailConfirmable
  extend ActiveSupport::Concern

  included do
    before_create :confirmation_token

    def confirmation_token
      return unless email_confirmation_enabled
      return if confirm_token.present? || email_confirmed
      self.confirm_token = SecureRandom.urlsafe_base64.to_s
    end

    def send_email_to_confirm_account
      return unless email_confirmation_enabled
      UserMailer.registration_confirmation(self).deliver
    rescue Net::SMTPSyntaxError => error
      logger.error error.message
    end

    def email_activate
      email_contact_method.update(confirmed: true)
      self.confirm_token = nil
      UserMailer.confirmation_status(self, save(validate: false)).deliver
    rescue Net::SMTPSyntaxError => error
      logger.error error.message
    end

    def email_confirmed
      return false unless email_contact_method.present?
      email_contact_method.confirmed
    end

    def email_confirmation_enabled
      email_confirm = AppSetting.find_by_name('EmailConfirmationEnabled')
      email_confirm&.value == 'true' && email_confirm&.active
    end
  end
end
