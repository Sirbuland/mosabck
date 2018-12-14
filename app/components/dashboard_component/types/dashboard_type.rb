DashboardComponent::Types::DashboardType = GraphQL::ObjectType.define do
	name 'dashboard'

	field :id,    !types.ID
	field :uid,   types.String
  field :title, types.String
  field :slug,  types.String

	field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(dashboard, _args, _ctx) { dashboard.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(dashboard, _args, _ctx) { dashboard.created_at }
  end

  field :panels do
    type types[DashboardComponent::Types::PanelType]
    resolve ->(dashboard, _args, _ctx) { dashboard.panels }
  end

  field :dashboardCoins do
    type types[DashboardComponent::Types::CoinType]
    resolve ->(dashboard, _args, _ctx) { dashboard.coins }
  end

end
