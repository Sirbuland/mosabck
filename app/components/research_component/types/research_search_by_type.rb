ResearchComponent::Types::ResearchSearchByType = GraphQL::EnumType.define do
  name 'ResearchSearchByType'
  value(GraphqlHelper::RESEARCH_SEARCH_BY[:date_authored], 'Date authored')
  value(GraphqlHelper::RESEARCH_SEARCH_BY[:research_type], 'Reseach type')
end
