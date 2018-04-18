module UserComponent
  module Interactors
    class GetUserIdFromEmail
      include Interactor

      def call
        email = context.args[:email]
        return unless email.present?
        email_identity = AuthIdentity.classic.active.where(
          "payload->>'email' = ?", email
        ).first
        if email_identity.present?
          context.user_id = email_identity.user_id
        else
          error_msg = I18n.t('errors.messages.not_found', entity: 'User')
          context.fail!(message: error_msg)
        end
      end
    end
  end
end
