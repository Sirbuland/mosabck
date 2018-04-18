module UserComponent
  module Interactors
    class PasswordUpdate
      include Interactor

      def call
        user = context.user
        args = context.args
        new_password = BCrypt::Password.create(args[:newPassword])
        old_pswd_args = args[:oldPassword]
        check_old_pswd = old_pswd_args.present?
        classic_identity = user.auth_identities.classic.first
        if classic_identity.present?
          update_password(classic_identity, new_password,
            check_old_pswd, old_pswd_args)
          void_pin(args[:pinNumber], user.id)
          context.user = user
        else
          error_message =
            I18n.t('errors.messages.not_found', 'ClassicIdentity')
          context.fail!(message: error_message)
        end
      end

      def update_password(identity, new_pswd, check_old, old_pswd)
        if check_old
          decrypted =
            BCrypt::Password.new(identity.payload['password'])
          if decrypted == old_pswd
            identity.payload['password'] = new_pswd
            identity.save
          else
            error_message =
              I18n.t('errors.messages.password_does_not_match')
            context.fail!(message: error_message)
          end
        else
          identity.payload['password'] = new_pswd
          identity.save
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
