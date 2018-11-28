DashboardComponent::Types::Inputs::PanelVarInputType = GraphQL::InputObjectType.define do
	name 'PanelVarInput'

	argument :panel_id, !types.ID
	argument :var_id,   !types.ID
end
