UserComponent::Mutations::VerifyEmail = GraphQL::Relay::Mutation.define do
  name 'verifyEmail'
  description 'Verify your email account'

  return_field :result, types.String

  input_field :pinCode, !types.String
  input_field :email, types.String
  input_field :action, !MiscComponent::Types::PinActionsEnumType

  resolve UserComponent::Resolvers::VerifyEmailResolver.new
end
