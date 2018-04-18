UserComponent::Types::UserSearchByType = GraphQL::EnumType.define do
  name 'UserSearchByType'
  value(GraphqlHelper::USER_SEARCH_BY[:username], 'Display name')
  value(GraphqlHelper::USER_SEARCH_BY[:email], 'Email')
  value(GraphqlHelper::USER_SEARCH_BY[:first_name], 'First name')
  value(GraphqlHelper::USER_SEARCH_BY[:last_name], 'Last name')
end
