DashboardComponent::Types::VarType = GraphQL::ObjectType.define do
	name 'var'

	field :value, types.String
	field :name,  types.String

end
