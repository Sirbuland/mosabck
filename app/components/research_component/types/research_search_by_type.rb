ResearchComponent::Types::ResearchSearchByType = GraphQL::EnumType.define do
  name 'ResearchSearchByType'
  value(GraphqlHelper::RESEARCH_SEARCH_BY[:first_name], 'First name')
  value(GraphqlHelper::RESEARCH_SEARCH_BY[:last_name], 'Last name')
end
