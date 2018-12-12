ResearchComponent::Types::ResearchOrderByType = GraphQL::EnumType.define do
  name 'ResearchOrderByRating'
  value(GraphqlHelper::ORDER_BY_FIELDS[:cached_votes_total],
    'Sort Researches by their rating in descending')
  value(GraphqlHelper::ORDER_BY_FIELDS[:date_authored],
  	'Sort Researches by date on which they are authored')
end
