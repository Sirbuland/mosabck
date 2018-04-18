module UserComponent
  module Interactors
    class GetUserIdFromPhone
      include Interactor

      def call
        phone_number = context.args[:phoneNumber]
        return unless phone_number.present?
        phone_identity = AuthIdentity.phone.active.where(
          "payload->>'phoneNumber' = ? ", phone_number
        ).first
        if phone_identity.present?
          context.user_id = phone_identity.user_id
        else
          error_msg = I18n.t('errors.messages.not_found', entity: 'User')
          context.fail!(message: error_msg)
        end
      end
    end
  end
end
