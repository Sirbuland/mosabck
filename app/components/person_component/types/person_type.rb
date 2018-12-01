PersonComponent::Types::PersonType = GraphQL::ObjectType.define do
	name 'Person'

	field :id, !types.ID
	field :first_name, types.String
  field :second_name, types.String
  field :description, types.String
  field :attribute1, types.String
  field :attribute2, types.String

	field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(person, _args, _ctx) { person.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(person, _args, _ctx) { person.created_at }
  end

end
