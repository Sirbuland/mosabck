DashboardComponent::Types::Inputs::VarInputType = GraphQL::InputObjectType.define do
	name 'VarInput'

	argument :id,    !types.ID
	argument :name,  types.String
	argument :value, types.String
end
