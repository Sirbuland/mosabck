module UserComponent
  module Interactors
    class ResetPassword
      include Interactor

      def call
        args = context.args
        channel = args[:channel].to_s.downcase
        user = context.user
        identity = find_identity(user, channel)
        pin = PinCode.create(
          user: user,
          action: "reset_password_#{channel}",
          auth_identity: identity,
          value: PinCode.unused_pin_code,
          expiration_date: Time.zone.now + 1.day
        )
        context.message_body = 'Success'
        UserMailer.reset_password(user, pin.value).deliver
      end

      private

      def find_identity(user, channel)
        identity = AuthIdentity.find_by_channel(user, channel)
        msg = I18n.t('errors.messages.not_found', entity: 'Identity')
        context.fail!(message: msg) unless identity.present?
        identity
      end

      def retieve_phone_number(user)
        phone_identity = user.phoneIdentity
        unless phone_identity.present?
          msg = I18n.t('errors.messages.not_found', entity: 'PhoneIdentity')
          context.fail!(message: msg)
        end
        phone_identity['phoneNumber']
      end
    end
  end
end
