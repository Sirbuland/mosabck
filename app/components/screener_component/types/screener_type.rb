ScreenerComponent::Types::ScreenerType = GraphQL::ObjectType.define do
  name 'Screener'

  field :id, !types.ID, property: :id
  field :name, !types.String, property: :name
  field :text, !types.String, property: :text
  
  field :deletedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(research, _args, _ctx) { author.deleted_at }
  end
  field :deletedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(screener, _args, _ctx) { screener.deleted_at }
  end

  field :filters, types[!ScreenerComponent::Types::ScreenerFilterType],
    property: :filters
end
