DashboardComponent::Types::PanelType = GraphQL::ObjectType.define do
	name 'panel'

	field :id,          !types.ID
	field :name,        types.String
    field :description, types.String
    field :slug,        types.String
    field :startDate,   types.String
    field :endDate,     types.String
	field :panelVars,   types[DashboardComponent::Types::VarType]
	
	# field :panelVars do
	# 	type DashboardComponent::Types::VarType
	# 	resolve ->(panel, _args, _ctx) { dashboard.updated_at }
	# end
end
