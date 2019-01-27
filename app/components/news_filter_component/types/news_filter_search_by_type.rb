NewsFilterComponent::Types::NewsFilterSearchByType = GraphQL::EnumType.define do
  name 'NewsFilterSearchByType'
  value(GraphqlHelper::NEWS_FILTER_SEARCH_BY[:name], 'Name')
  value(GraphqlHelper::NEWS_FILTER_SEARCH_BY[:filter_type], 'Filter type')
end
