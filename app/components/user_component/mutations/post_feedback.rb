UserComponent::Mutations::PostFeedback = GraphQL::Relay::Mutation.define do
  name 'postFeedback'
  description 'sends User Feedback'

  return_field :result, !types.Boolean

  input_field :message, !types.String
  input_field :page, types.String

  resolve UserComponent::Resolvers::PostFeedbackResolver.new
end
