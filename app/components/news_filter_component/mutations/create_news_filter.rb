NewsFilterComponent::Mutations::CreateNewsFilter = GraphQL::Relay::Mutation.define do
	name 'createNewsFilter'
	description 'create a new research'

	return_field :newsFilter, NewsFilterComponent::Types::NewsFilterType

	input_field :name, types.String
  input_field :description, types.String
 
	resolve NewsFilterComponent::Resolvers::CreateNewsFilterResolver.new
end
