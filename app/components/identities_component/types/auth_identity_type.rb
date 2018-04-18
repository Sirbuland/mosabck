IdentitiesComponent::Types::AuthIdentityType = GraphQL::InterfaceType.define do
  name 'AuthIdentity'

  resolve_type ->(value, _ctx) {
    klass = value.type.gsub('AuthIdentities::', '')
    "IdentitiesComponent::Types::#{klass}Type".constantize
  }

  field :user, !UserComponent::Types::UserType
end
