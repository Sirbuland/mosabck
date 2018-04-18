AuthenticationComponent::Mutations::SignInOauth =
  GraphQL::Relay::Mutation.define do
    name 'signInOauth'
    description 'Sign in OAuth'

    return_field :user, UserComponent::Types::UserType
    return_field :jwt, types.String

    input_field :oauthUserId, !types.String
    input_field :oauthToken, !types.String
    input_field :userType, !UserComponent::Types::OauthUserType
    input_field :deviceId, !types.String

    resolve AuthenticationComponent::Resolvers::SignInOauthResolver.new
  end
