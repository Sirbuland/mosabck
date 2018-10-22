module UserComponent
  module Interactors
    class PasswordUpdate
      include Interactor

      def call
        user = context.user
        args = context.args
        new_password = BCrypt::Password.create(args[:newPassword])
        classic_identity = user.auth_identities.classic.first
        if classic_identity.present?
          classic_identity.payload['password'] = new_password
          classic_identity.save
        else
          error_message =
            I18n.t('errors.messages.not_found', 'ClassicIdentity')
          context.fail!(message: error_message)
        end
      end

      def void_pin(pin_number, user_id)
        PinCode.active
               .where(value: pin_number, user_id: user_id)
               .update(status: 'used')
      end
    end
  end
end
