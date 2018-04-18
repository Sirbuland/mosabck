MiscComponent::Types::Inputs::AddOauthInputType =
  GraphQL::InputObjectType.define do
    name 'AddOauthInputType'
    description 'Properties for adding oauth user'

    argument :oauthUserId, types.String do
      description 'Oauth User Id'
    end

    argument :oauthAccessToken, types.String do
      description 'Oauth Access Token'
    end

    argument :expirationDate, types.String do
      description 'Expiration date of token'
    end
  end
