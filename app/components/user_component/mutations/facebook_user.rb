UserComponent::Mutations::FacebookUser = GraphQL::Relay::Mutation.define do
  name 'createFacebookUser'
  description 'Creates a facebook identity user WILL BE DEPRECATED SOON!!!'

  return_field :user, UserComponent::Types::UserType

  input_field :deviceId, !types.String
  input_field :displayName, types.String
  input_field :firstName, types.String
  input_field :lastName, types.String
  input_field :bio, types.String
  input_field :facebookUserId, types.String
  input_field :facebookAccessToken, types.String

  input_field :fbUserId, types.String
  input_field :fbAccessToken, types.String
  input_field :expirationDate, types.String
  input_field :avatarUrl, types.String
  input_field :backgroundImageUrl, types.String
  input_field :geoMeta, GeoComponent::Types::Inputs::AddGeoMetaInputType

  resolve UserComponent::Resolvers::FacebookUserResolver.new
end
