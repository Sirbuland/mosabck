module IdentitiesComponent
  module Interactors
    class DeactivateAuthIdentities
      include Interactor

      def call
        check_for_empty_profile = context.check_for_empty_profile
        provider = context.args[:provider].to_sym
        identities = context.user.auth_identities.active
        if AuthIdentity::IDENTITY_TYPES.keys.include?(provider)
          provider_identities = identities.public_send(provider)
          same_count = identities.count == provider_identities.count
          if !check_for_empty_profile || check_for_empty_profile && !same_count
            context.identities = identities
            provider_identities.update_all(status: :deactivated)
          end
        else
          msg = "provider: #{I18n.t('errors.messages.wrong_identity_type')}"
          context.fail!(message: msg)
        end
      end
    end
  end
end
