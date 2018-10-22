ScreenerComponent::Types::ScreenerType = GraphQL::ObjectType.define do
  name 'Screener'

  field :id, !types.ID, property: :id
  field :name, !types.String, property: :name
  field :text, !types.String, property: :text
  field :filters, types[!ScreenerComponent::Types::ScreenerFilterType],
    property: :filters
end
