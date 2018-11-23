DashboardComponent::Types::PanelType = GraphQL::ObjectType.define do
	name 'panel'

	field :id, !types.ID
	field :name, types.String
	field :description, types.String
	field :start_date, types.String
	field :end_date, types.String

	field :vars do
		type types[DashboardComponent::Types::VarType]
	end
end
