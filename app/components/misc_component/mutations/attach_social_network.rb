MiscComponent::Mutations::AttachSocialNetwork =
  GraphQL::Relay::Mutation.define do
    name 'AttachSocialNetwork'
    return_field :user, UserComponent::Types::UserType

    input_field :id, types.ID
    input_field :provider, types.String

    input_field :email, types.String
    input_field :password, types.String
    input_field :emailConfirmed, types.Boolean

    input_field :phoneNumber, types.String

    input_field :fbUserId, types.String
    input_field :fbAccessToken, types.String
    input_field :expirationDate, types.String

    resolve UserComponent::Resolvers::AttachSocialNetworkResolver.new
  end
