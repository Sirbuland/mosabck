MiscComponent::Types::BigDecimalType = GraphQL::ObjectType.define do
  name 'BigDecimal'

  field :value, !types.Float do
    resolve ->(_obj, _args, _ctx) {
      Faker::Number.decimal(2, 3)
    }
  end
end
