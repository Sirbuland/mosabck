UserComponent::Mutations::UpdateUserInstallation =
  GraphQL::Relay::Mutation.define do
    name 'updateUserInstallation'
    description 'Updates user installation'

    return_field :user, UserComponent::Types::UserType

    input_field :updateUserInstallation,
      UserComponent::Types::Inputs::UpdateUserInstallationInputType

    resolve UserComponent::Resolvers::UpdateUserInstallationResolver.new
  end
