IdentitiesComponent::Types::FacebookIdentityType =
  GraphQL::ObjectType.define do
    name 'FacebookIdentity'
    description 'Facebook identity information'
    interfaces [IdentitiesComponent::Types::AuthIdentityType]

    field :facebookUserId do
      type types.String
      resolve ->(obj, _args, _ctx) { obj.payload['facebookUserId'] }
    end

    field :fbUserId do
      type types.String
      resolve ->(obj, _args, _ctx) { obj.payload['facebookUserId'] }
    end

    field :facebookAccessToken do
      type types.String
      resolve ->(obj, _args, _ctx) { obj.payload['facebookAccessToken'] }
    end

    field :fbAccessToken do
      type types.String
      resolve ->(obj, _args, _ctx) { obj.payload['facebookAccessToken'] }
    end

    field :expirationDate do
      type types.String
      resolve ->(obj, _args, _ctx) { obj.payload['expirationDate'] }
    end
  end
