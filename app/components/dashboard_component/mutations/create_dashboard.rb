DashboardComponent::Mutations::CreateDashboard = GraphQL::Relay::Mutation.define do
	name 'createDashboard'
	description 'create a new dashboard'

	return_field :dashboard, DashboardComponent::Types::DashboardType

	input_field :uid,   types.String
	input_field :title, types.String
	input_field :slug,  types.String
	input_field :panels,
	  types[!DashboardComponent::Types::Inputs::PanelInputType]

	resolve DashboardComponent::Resolvers::CreateDashboardResolver.new
end