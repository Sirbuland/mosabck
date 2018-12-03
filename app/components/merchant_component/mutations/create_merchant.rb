MerchantComponent::Mutations::CreateMerchant = GraphQL::Relay::Mutation.define do
	name 'createMerchant'
	description 'create a new Merchant'

	return_field :merchant, MerchantComponent::Types::MerchantType

	input_field :assetProcessor, types.String
	input_field :merchant, types.String
	input_field :sourceUrl, types.String
	input_field :description, types.String

	resolve MerchantComponent::Resolvers::CreateMerchantResolver.new
end
