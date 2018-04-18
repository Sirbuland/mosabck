UserComponent::Mutations::UpdateUserPassword =
  GraphQL::Relay::Mutation.define do
    name 'updateUserPassword'
    description 'Updates a user password'

    return_field :user, UserComponent::Types::UserType

    input_field :id, types.ID
    input_field :pinNumber, types.String
    input_field :phoneNumber, types.String
    input_field :email, types.String
    input_field :oldPassword, types.String
    input_field :newPassword, !types.String

    resolve UserComponent::Resolvers::UpdateUserPasswordResolver.new
  end
