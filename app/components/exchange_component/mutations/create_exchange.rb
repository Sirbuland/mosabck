ExchangeComponent::Mutations::CreateExchange = GraphQL::Relay::Mutation.define do
	name 'createExchange'
	description 'create a new exchange'

	return_field :exchange, ExchangeComponent::Types::ExchangeType

	input_field :exchange, types.String
	input_field :vetted,  types.String
	
	resolve ExchangeComponent::Resolvers::CreateExchangeResolver.new
end
