ResearchComponent::Mutations::DeleteResearch =
  GraphQL::Relay::Mutation.define do
    name 'deleteResearch'

    return_field :research, ResearchComponent::Types::ResearchType

    input_field :id, !types.ID

    resolve ResearchComponent::Resolvers::DeleteResearchResolver.new
  end
