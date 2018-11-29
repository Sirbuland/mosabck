DashboardComponent::Types::Inputs::PanelInputType =
  GraphQL::InputObjectType.define do
    name 'PanelInput'

    argument :name,        types.String
    argument :description, types.String
    argument :slug,        types.String
    argument :startDate,   types.String
    argument :endDate,     types.String
    argument :panelVars,   types[DashboardComponent::Types::Inputs::VarInputType]

  end
