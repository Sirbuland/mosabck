VarComponent::Types::VarType = GraphQL::ObjectType.define do
	name 'var'

	field :id,   !types.ID
	field :name, types.String

end
