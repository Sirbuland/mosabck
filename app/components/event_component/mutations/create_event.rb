EventComponent::Mutations::CreateEvent = GraphQL::Relay::Mutation.define do
	name 'createEvent'
	description 'create a new event'

	return_field :event, EventComponent::Types::EventType

	input_field :eventType, types.String
	input_field :timestamp, types.String
	input_field :description, types.String
	input_field :importance, types.String

	resolve EventComponent::Resolvers::CreateEventResolver.new
end