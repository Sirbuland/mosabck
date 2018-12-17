DashboardComponent::Types::Inputs::PanelInputType =
  GraphQL::InputObjectType.define do
    name 'PanelInput'

    argument :name,          types.String
    argument :description,   types.String
    argument :slug,          types.String
    argument :start_date,    types.Int
    argument :end_date,      types.Int
    argument :graf_panel_id, types.Int
    argument :graf_dash_uri, types.String
    argument :panelVars,     types[DashboardComponent::Types::Inputs::VarInputType]
    argument :grafCoins,    types[DashboardComponent::Types::Inputs::CoinInputType]

  end
