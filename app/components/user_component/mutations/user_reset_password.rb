UserComponent::Mutations::UserResetPassword =
  GraphQL::Relay::Mutation.define do
    name 'userResetPassword'
    description 'Sends a message with the password reset pin to the user'

    return_field :messageBody, types.String

    input_field :userId, types.ID
    input_field :phoneNumber, types.String
    input_field :email, types.String
    input_field :channel, !MiscComponent::Types::ChannelEnumType

    resolve UserComponent::Resolvers::ResetPasswordResolver.new
  end
