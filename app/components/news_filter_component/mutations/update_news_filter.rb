NewsFilterComponent::Mutations::UpdateNewsFilter = GraphQL::Relay::Mutation.define do
	name 'updateNewsFilter'
	description 'update a news filter'

	return_field :newsFilter, NewsFilterComponent::Types::NewsFilterType

	input_field :id, !types.ID
	input_field :name, types.String
	input_field :searchTerm, types.String
  input_field :description, types.String
  input_field :selected, types.Boolean
  input_field :filterType, types.String
 
	resolve NewsFilterComponent::Resolvers::UpdateNewsFilterResolver.new
end
