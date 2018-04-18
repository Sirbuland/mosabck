AuthenticationComponent::Mutations::SignInClassic =
  GraphQL::Relay::Mutation.define do
    name 'signInClassic'
    description 'Sign in'

    return_field :user, UserComponent::Types::UserType
    return_field :jwt, types.String

    input_field :email, !types.String
    input_field :password, !types.String
    input_field :deviceId, !types.String

    resolve AuthenticationComponent::Resolvers::SignInClassicResolver.new
  end
