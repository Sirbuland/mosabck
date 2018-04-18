module UserComponent
  module Interactors
    class GetUserIdFromPinNumberAndPhone
      include Interactor

      def call
        error_msg = I18n.t('errors.messages.not_found', entity: 'User')
        args = context.args
        pin_number = args[:pinNumber]
        phone_number = args[:phoneNumber]

        return unless pin_number.present? && phone_number.present?

        phone_identity =
          AuthIdentities::PhoneIdentity.by_phone_number(phone_number).first

        if phone_identity.present?
          pin_code = retrieve_pin_code phone_identity.id, pin_number
          if pin_code.present?
            context.user_id = User.find_by_id(pin_code.user_id).id
          else
            context.fail!(message: error_msg)
          end
        else
          context.fail!(message: error_msg)
        end
      end

      def retrieve_pin_code(phone_identity_id, pin_number)
        PinCode.active.by_auth_identity_id_and_pin(phone_identity_id,
          pin_number).first
      end
    end
  end
end
