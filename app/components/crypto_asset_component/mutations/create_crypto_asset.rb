CryptoAssetComponent::Mutations::CreateCryptoAsset = GraphQL::Relay::Mutation.define do
	name 'createCryptoAsset'
	description 'create a new crypto asset'

	return_field :crypto_asset, CryptoAssetComponent::Types::CryptoAssetType

	input_field :name, types.String
	input_field :attribute1, types.String
	input_field :attribute2, types.String

	resolve CryptoAssetComponent::Resolvers::CreateCryptoAssetResolver.new
end
