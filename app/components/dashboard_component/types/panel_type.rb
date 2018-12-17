DashboardComponent::Types::PanelType = GraphQL::ObjectType.define do
	name 'panel'

	field :id,            !types.ID
	field :name,          types.String
	field :description,   types.String
	field :slug,          types.String
	field :start_date,    types.Int
	field :end_date,      types.Int
	field :graf_panel_id, types.Int
	field :graf_dash_uri, types.String

	field :updatedAt do
		type MiscComponent::Types::DateTimeType
		resolve ->(panel, _args, _ctx) { panel.updated_at }
  end

  field :createdAt do
		type MiscComponent::Types::DateTimeType
		resolve ->(panel, _args, _ctx) { panel.created_at }
  end

  field :panelVars do
		type types[DashboardComponent::Types::VarType]
		resolve ->(panel, _args, _ctx) { panel.vars }
  end

  field :grafCoins do
  	type types[DashboardComponent::Types::CoinType]
  	resolve ->(panel, _args, _ctx) { panel.coins }
  end
end
