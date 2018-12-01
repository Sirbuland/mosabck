MerchantComponent::Types::MerchantType = GraphQL::ObjectType.define do
	name 'merchant'

	field :id, !types.ID
	field :assetProcessor, types.String, property: :asset_processor
  field :merchant, types.String
  field :sourceUrl, types.String, property: :source_url
  field :description, types.String

	field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(merchant, _args, _ctx) { merchant.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(merchant, _args, _ctx) { merchant.created_at }
  end

  field :cryptoAssets do
    type types[CryptoAssetComponent::Types::CryptoAssetType]
    resolve ->(merchant, _args, _ctx) { merchant.crypto_assets }
  end
end
