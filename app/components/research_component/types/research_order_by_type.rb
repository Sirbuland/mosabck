ResearchComponent::Types::ResearchOrderByType = GraphQL::EnumType.define do
  name 'ResearchOrderByRating'
  value(GraphqlHelper::ORDER_BY_FIELDS[:rating],
    'Sort Researchs byt their name alphabetically')
end
