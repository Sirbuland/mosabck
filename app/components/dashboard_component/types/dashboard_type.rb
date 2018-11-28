DashboardComponent::Types::DashboardType = GraphQL::ObjectType.define do
	name 'dashboard'

	field :id, !types.ID
	field :uid, types.String
	field :title, types.String
	field :uri, types.String
	field :url, types.String

	field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(dashboard, _args, _ctx) { user.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(dashboard, _args, _ctx) { user.created_at }
  end

  field :panels do 
    type types[PanelComponent::Types::PanelType]
  end
end
