ExchangeComponent::Types::ExchangeType = GraphQL::ObjectType.define do
	name 'exchange'

	field :id,    !types.ID
	field :exchange,   types.String
  field :vetted, types.String

	field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(exchange, _args, _ctx) { exchange.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(exchange, _args, _ctx) { exchange.created_at }
  end

  field :crypto_assets do
    type types[CryptoAssetComponent::Types::CryptoAssetType]
    resolve ->(exchange, _args, _ctx) { exchange.crypto_assets }
  end

end
