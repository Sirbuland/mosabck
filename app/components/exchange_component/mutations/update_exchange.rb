ExchangeComponent::Mutations::UpdateExchange = GraphQL::Relay::Mutation.define do
	name 'updateExchange'
	description 'update an exchange'

	return_field :exchange, ExchangeComponent::Types::ExchangeType

	input_field :exchange, types.String
	input_field :vetted,  types.String
	
	resolve ExchangeComponent::Resolvers::UpdateExchangeResolver.new
end
