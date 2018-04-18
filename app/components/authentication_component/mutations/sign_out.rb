AuthenticationComponent::Mutations::SignOut =
  GraphQL::Relay::Mutation.define do
    name 'signOut'
    description 'Sign out'

    return_field :user, UserComponent::Types::UserType

    resolve AuthenticationComponent::Resolvers::SignOutResolver.new
  end
