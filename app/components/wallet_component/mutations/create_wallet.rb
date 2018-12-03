WalletComponent::Mutations::CreateWallet = GraphQL::Relay::Mutation.define do
	name 'createWallet'
	description 'create a new wallet'

	return_field :wallet, WalletComponent::Types::WalletType

	input_field :name, types.String
  input_field :description, types.String
  input_field :imageLink, types.String
  input_field :sourceLink, types.String

	resolve WalletComponent::Resolvers::CreateWalletResolver.new
end
