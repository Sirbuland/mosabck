DashboardComponent::Types::DashboardType = GraphQL::ObjectType.define do
	name 'dashboard'

	field :id,    !types.ID
	field :name,   types.String
  field :description, types.String

	field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(dashboard, _args, _ctx) { dashboard.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(dashboard, _args, _ctx) { dashboard.created_at }
  end
end
