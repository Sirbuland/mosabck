UserComponent::Mutations::OauthUser = GraphQL::Relay::Mutation.define do
  name 'createOauthUser'
  description 'Creates an oauth user (facebook, google, twitter, etc)'

  return_field :user, UserComponent::Types::UserType
  return_field :jwt, types.String

  input_field :deviceId, !types.String
  input_field :displayName, types.String
  input_field :firstName, types.String
  input_field :lastName, types.String
  input_field :bio, types.String
  input_field :userType, !UserComponent::Types::OauthUserType
  input_field :oauthUserId, !types.String
  input_field :oauthAccessToken, !types.String
  input_field :expirationDate, types.String
  input_field :avatarUrl, types.String
  input_field :backgroundImageUrl, types.String
  input_field :geoMeta, GeoComponent::Types::Inputs::AddGeoMetaInputType
  input_field :subscribedToNewsLetter, types.Boolean
  input_field :phoneNumberString, types.String
  input_field :birthdate, MiscComponent::Types::DateTimeType

  resolve UserComponent::Resolvers::OauthUserResolver.new
end
