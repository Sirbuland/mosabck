PersonComponent::Mutations::CreatePerson = GraphQL::Relay::Mutation.define do
	name 'createPerson'
	description 'create a new person'

	return_field :person, PersonComponent::Types::PersonType

  input_field :firstName, types.String
  input_field :secondName, types.String
  input_field :description, types.String
  input_field :attribute1, types.String
  input_field :attribute2, types.String

	resolve PersonComponent::Resolvers::CreatePersonResolver.new
end
