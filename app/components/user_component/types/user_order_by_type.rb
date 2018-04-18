UserComponent::Types::UserOrderByType = GraphQL::EnumType.define do
  name 'UserOrderBy'
  value(GraphqlHelper::ORDER_BY_FIELDS[:display_name_alph],
    'Sort users byt their name alphabetically')
end
