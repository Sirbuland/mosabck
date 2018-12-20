UserComponent::Mutations::UpdateUser = GraphQL::Relay::Mutation.define do
  name 'updateUser'
  description 'Updates a user'

  return_field :user, UserComponent::Types::UserType

  input_field :id, types.ID
  input_field :displayName, types.String
  input_field :firstName, types.String
  input_field :lastName, types.String
  input_field :email, types.String
  input_field :password, types.String
  input_field :bio, types.String
  input_field :fbUserId, types.String
  input_field :fbAccessToken, types.String
  input_field :expirationDate, types.String
  input_field :phoneNumber, types.String
  input_field :avatar, ApolloUploadServer::Upload
  input_field :backgroundImageUrl, types.String
  input_field :geoMeta, GeoComponent::Types::Inputs::AddGeoMetaInputType
  input_field :birthdate, MiscComponent::Types::DateTimeType
  input_field :sex, MiscComponent::Types::SexEnumType

  resolve UserComponent::Resolvers::UpdateUserResolver.new
end
