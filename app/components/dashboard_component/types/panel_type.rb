DashboardComponent::Types::PanelType = GraphQL::ObjectType.define do
	name 'panel'

	field :id,            !types.ID
	field :name,          types.String
    field :description,   types.String
    field :slug,          types.String
    field :start_date,    types.String
	field :end_date,     types.String
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
end
