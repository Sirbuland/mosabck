module UserComponent
  module Interactors
    class GetUserByPinNumberAndEmail
      include Interactor

      def call
        error_msg = I18n.t('errors.messages.not_found', entity: 'User')
        args = context.args
        pin_number = args[:pinNumber]
        email = args[:email]

        identity = AuthIdentities::ClassicIdentity.by_email(email).first
        return context.fail!(message: error_msg) unless identity.present?

        pin_code = retrieve_pin_code identity.id, pin_number
        return context.fail!(message: error_msg) unless pin_code.present?

        context.user = pin_code.user
      end

      def retrieve_pin_code(classic_identity, pin_number)
        PinCode
          .active
          .by_auth_identity_id_and_pin(classic_identity, pin_number)
          .first
      end
    end
  end
end
