DashboardComponent::Mutations::CreateDashboard = GraphQL::Relay::Mutation.define do
	name 'createDashboard'
	description 'create a new dashboard'

	input_field :uid, types.String
	input_field :title, types.String
	input_field :uri, types.String
	input_field :url, types.String

	return_field :dashboard, DashboardComponent::Types::DashboardType

	resolve DashboardComponent::Resolvers::CreateDashboardResolver.new
end