ScreenerComponent::Types::Inputs::ScreenerFilterInputType =
  GraphQL::InputObjectType.define do
    name 'ScreenerFilterInput'

    argument :name, !ScreenerComponent::Types::FilterNameEnumType
    argument :operator, !ScreenerComponent::Types::FilterOperatorEnumType
    argument :category, !types.String
    argument :value, !types.String
  end
