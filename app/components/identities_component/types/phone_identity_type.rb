IdentitiesComponent::Types::PhoneIdentityType = GraphQL::ObjectType.define do
  name 'PhoneIdentity'
  description 'Phone identity information'
  interfaces [IdentitiesComponent::Types::AuthIdentityType]

  field :phoneNumber do
    type types.String
    resolve ->(obj, _args, _ctx) {
      obj.payload['phoneNumber']
    }
  end
end
