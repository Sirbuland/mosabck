DashboardComponent::Types::Inputs::VarInputType = GraphQL::InputObjectType.define do
	name 'VarInput'

	argument :name,  types.String
	argument :value, types.String
end
