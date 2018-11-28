PanelComponent::Mutations::CreatePanel = GraphQL::Relay::Mutation.define do
	name 'createPanel'
	description 'create a new panel'

	input_field :id,          !types.ID
	input_field :name,        types.String
	input_field :description, types.String
	input_field :start_date,  types.String
	input_field :end_date,    types.String

	return_field :panel, PanelComponent::Types::PanelType

	resolve PanelComponent::Resolvers::CreatePanelResolver.new
end