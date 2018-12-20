UserComponent::Mutations::CreateUser = GraphQL::Relay::Mutation.define do
  name 'createUser'
  description 'Creates a new user'

  return_field :user, UserComponent::Types::UserType
  return_field :jwt, types.String

  input_field :displayName, types.String
  input_field :email, types.String
  input_field :password, types.String
  input_field :backgroundImageUrl, types.String

  input_field :facebook, MiscComponent::Types::Inputs::AddOauthInputType
  input_field :github, MiscComponent::Types::Inputs::AddOauthInputType
  input_field :google, MiscComponent::Types::Inputs::AddOauthInputType
  input_field :twitter, MiscComponent::Types::Inputs::AddOauthInputType

  input_field :phoneNumber, types.String

  input_field :deviceId, !types.String
  input_field :username, types.String
  input_field :profession, types.String
  input_field :description, types.String
  input_field :displayName, types.String
  input_field :firstName, types.String
  input_field :lastName, types.String
  input_field :bio, types.String
  input_field :avatar, ApolloUploadServer::Upload
  input_field :geoMeta, GeoComponent::Types::Inputs::AddGeoMetaInputType
  input_field :subscribedToNewsLetter, types.Boolean
  input_field :birthdate, MiscComponent::Types::DateTimeType
  input_field :sex, MiscComponent::Types::SexEnumType
  input_field :refCode, types.String

  resolve UserComponent::Resolvers::CreateUserResolver.new
end
