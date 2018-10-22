ScreenerComponent::Types::FilterOperatorEnumType = GraphQL::EnumType.define do
  name 'FilterOperatorEnum'

  items = %w[gt gte lt lte eq]
  items.each { |item| value item }
end
