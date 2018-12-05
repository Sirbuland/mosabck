ResourceComponent::Mutations::CreateResource = GraphQL::Relay::Mutation.define do
	name 'createResource'
	description 'create a new resource'

	return_field :resource, ResourceComponent::Types::ResourceType

	input_field :name, types.String
  input_field :attribute1, types.String
  input_field :attribute2, types.String
  input_field :description, types.String

	resolve ResourceComponent::Resolvers::CreateResourceResolver.new
end
