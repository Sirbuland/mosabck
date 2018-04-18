UserComponent::Mutations::ClassicUser = GraphQL::Relay::Mutation.define do
  name 'createClassicUser'
  description 'Creates a classic identity user'

  return_field :user, UserComponent::Types::UserType
  return_field :jwt, types.String

  input_field :deviceId, !types.String
  input_field :displayName, types.String
  input_field :firstName, types.String
  input_field :lastName, types.String
  input_field :email, !types.String
  input_field :password, !types.String
  input_field :bio, types.String
  input_field :avatarUrl, types.String
  input_field :backgroundImageUrl, types.String
  input_field :geoMeta, GeoComponent::Types::Inputs::AddGeoMetaInputType
  input_field :subscribedToNewsLetter, types.Boolean
  input_field :phoneNumberString, types.String
  input_field :birthdate, MiscComponent::Types::DateTimeType

  resolve UserComponent::Resolvers::ClassicUserResolver.new
end
