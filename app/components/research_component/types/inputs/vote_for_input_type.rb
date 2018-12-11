ResearchComponent::Types::Inputs::VoteForInputType =
  GraphQL::InputObjectType.define do
    name 'VoteForInput'

    argument :voterId,		 types.ID
    argument :votableId,   types.ID
    argument :voterType,   types.String

  end
