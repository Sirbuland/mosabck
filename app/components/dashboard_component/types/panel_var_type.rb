DashboardComponent::Types::PanelVarType = GraphQL::ObjectType.define do
	name 'panelvar'

	field :panel_id, !types.ID
	field :var_id,   !types.ID

end
