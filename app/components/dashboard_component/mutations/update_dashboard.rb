DashboardComponent::Mutations::UpdateDashboard =
  GraphQL::Relay::Mutation.define do
    name 'updateDashboard'

    return_field :dashboard, DashboardComponent::Types::DashboardType

	  input_field :id,    !types.ID
		input_field :uid,   types.String
		input_field :title, types.String
		input_field :slug,  types.String
		input_field :panels,
	  	types[!DashboardComponent::Types::Inputs::PanelInputType]
	  input_field :dashboardCoins,
			types[!DashboardComponent::Types::Inputs::CoinInputType]

    resolve DashboardComponent::Resolvers::UpdateDashboardResolver.new
end
