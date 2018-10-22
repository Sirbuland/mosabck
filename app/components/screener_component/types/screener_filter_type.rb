ScreenerComponent::Types::ScreenerFilterType = GraphQL::ObjectType.define do
  name 'ScreenerFilter'

  field :name do
    type !ScreenerComponent::Types::FilterNameEnumType
    resolve ->(hash, _args, _ctx) { hash['name'] }
  end
  field :operator do
    type !ScreenerComponent::Types::FilterOperatorEnumType
    resolve ->(hash, _args, _ctx) { hash['operator'] }
  end
  field :category do
    type !types.String
    resolve ->(hash, _args, _ctx) { hash['category'] }
  end
  field :value do
    type !types.String
    resolve ->(hash, _args, _ctx) { hash['value'] }
  end
end
