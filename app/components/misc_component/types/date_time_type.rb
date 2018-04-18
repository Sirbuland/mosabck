MiscComponent::Types::DateTimeType = GraphQL::ScalarType.define do
  name 'DateTime'
  description 'Date and time'

  coerce_input ->(value, _ctx) { value.to_datetime }
end
