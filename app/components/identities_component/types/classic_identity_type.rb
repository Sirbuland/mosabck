IdentitiesComponent::Types::ClassicIdentityType = GraphQL::ObjectType.define do
  name 'ClassicIdentity'
  description 'Classic identity information'
  interfaces [IdentitiesComponent::Types::AuthIdentityType]

  field :email do
    type types.String
    resolve ->(obj, _args, _ctx) { obj.payload['email'] }
  end

  field :password do
    type types.String
    resolve ->(obj, _args, _ctx) { obj.payload['password'] }
  end

  field :emailConfirmed do
    type types.String
    resolve ->(obj, _args, _ctx) { obj.payload['email_confirmed'] }
  end
end
