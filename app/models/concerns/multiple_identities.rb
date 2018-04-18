module MultipleIdentities
  extend ActiveSupport::Concern

  included do
    def particular_entity(identity_type)
      type = "AuthIdentities::#{identity_type.camelize}"
      requested_entity =
        auth_identities.where(type: type).first
      return nil unless requested_entity.present? &&
                        requested_entity.try(:payload).present?
      current_payload = requested_entity.payload
      current_payload
    end

    def phoneIdentity
      particular_entity(AuthIdentity::IDENTITY_TYPES[:phone])
    end

    def facebookIdentity
      particular_entity(AuthIdentity::IDENTITY_TYPES[:facebook])
    end

    def classicIdentity
      particular_entity(AuthIdentity::IDENTITY_TYPES[:classic])
    end
  end
end
