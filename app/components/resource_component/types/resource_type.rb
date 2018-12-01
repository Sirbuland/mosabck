ResourceComponent::Types::ResourceType = GraphQL::ObjectType.define do
	name 'Resource'

  field :id, !types.ID
  field :name, types.String
  field :attribute1, types.String
  field :attribute2, types.String
  field :description, types.String

	field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(resource, _args, _ctx) { resource.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(resource, _args, _ctx) { resource.created_at }
  end

end
