module UserComponent
  module Interactors
    class GetUserIdFromPinNumberAndEmail
      include Interactor

      def call
        error_msg = I18n.t('errors.messages.not_found', entity: 'User')
        args = context.args
        pin_number = args[:pinNumber]
        email = args[:email]

        return unless pin_number.present? && email.present?

        classic_identity =
          AuthIdentities::ClassicIdentity.by_email(email).first

        if classic_identity.present?
          pin_code = retrieve_pin_code classic_identity.id, pin_number
          if pin_code.present?
            context.user_id = User.find_by_id(pin_code.user_id).id
          else
            context.fail!(message: error_msg)
          end
        else
          context.fail!(message: error_msg)
        end
      end

      def retrieve_pin_code(classic_identity, pin_number)
        PinCode.active.by_auth_identity_id_and_pin(classic_identity,
          pin_number).first
      end
    end
  end
end
