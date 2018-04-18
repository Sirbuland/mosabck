module UserComponent
  module Interactors
    class UpdateUserAccounts
      include Interactor

      def call
        args = context.args
        provider = args[:provider]
        payload = UserService.public_send(
          "payload_for_#{provider}_identity",
          args
        )
        klass = "AuthIdentities::#{provider.camelize}Identity"
        if klass.constantize.exists_similar?(payload: payload)
          message = "provider: #{I18n.t('errors.messages.taken_profile')}"
          context.fail!(message: message)
        else
          context.identity = context.identities.create(
            payload: payload,
            type: klass
          )
        end
      end
    end
  end
end
