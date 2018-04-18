UserComponent::Mutations::PhoneUser = GraphQL::Relay::Mutation.define do
  name 'createPhoneUser'
  description 'Creates a phone identity user'

  return_field :user, UserComponent::Types::UserType
  return_field :jwt, types.String

  input_field :deviceId, !types.String
  input_field :displayName, types.String
  input_field :email, types.String
  input_field :password, types.String
  input_field :bio, types.String
  input_field :phoneNumber, !types.String
  input_field :geoMeta, GeoComponent::Types::Inputs::AddGeoMetaInputType

  resolve UserComponent::Resolvers::PhoneUserResolver.new
end
