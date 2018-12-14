DashboardComponent::Types::Inputs::CoinInputType =
  GraphQL::InputObjectType.define do
    name 'CoinInput'

    argument :text,    types.String
    argument :value,    types.String
    argument :selected, types.Boolean
  end
