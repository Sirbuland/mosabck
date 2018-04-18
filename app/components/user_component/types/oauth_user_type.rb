UserComponent::Types::OauthUserType = GraphQL::EnumType.define do
  name 'OauthUserType'
  description 'It specifies user platform'

  value(GraphqlHelper::OAUTH_USER_TYPES[:facebook], 'User from Facebook')
  value(GraphqlHelper::OAUTH_USER_TYPES[:google], 'User from Google')
  value(GraphqlHelper::OAUTH_USER_TYPES[:twitter], 'User from twitter')
  value(GraphqlHelper::OAUTH_USER_TYPES[:github], 'User from github')
end
