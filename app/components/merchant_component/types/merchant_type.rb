MerchantComponent::Types::MerchantType = GraphQL::ObjectType.define do
	name 'merchant'

	field :id, !types.ID
	field :asset_processor, types.String
  field :merchant, types.String
  field :source_url, types.String
  field :description, types.String

	field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(merchant, _args, _ctx) { merchant.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(merchant, _args, _ctx) { merchant.created_at }
  end

  field :crypto_assets do
    type types[CryptoAssetComponent::Types::CryptoAssetType]
    resolve ->(merchant, _args, _ctx) { merchant.crypto_assets }
  end
end
