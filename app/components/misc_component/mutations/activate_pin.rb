MiscComponent::Mutations::ActivatePin = GraphQL::Relay::Mutation.define do
  name 'activatePin'
  description 'Activate Received Pin'

  return_field :result, types.String

  input_field :pinCode, !types.String
  input_field :newPassword, types.String

  resolve MiscComponent::Resolvers::ActivatePin.new
end
