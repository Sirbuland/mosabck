CryptoAssetComponent::Types::CryptoAssetType = GraphQL::ObjectType.define do
	name 'cryptAsset'

	field :id,    !types.ID
	field :name,   types.String
  field :attribut1, types.String
  field :attribut2,  types.String

	field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve -> (cryptoAsset, _args, _ctx) { cryptoAsset.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve -> (cryptoAsset, _args, _ctx) { cryptoAsset.created_at }
  end

end
