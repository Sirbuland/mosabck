DashboardComponent::Types::CoinType = GraphQL::ObjectType.define do
	name 'Coin'

	field :id,    !types.ID
  field :text, types.String
  field :value,   types.String
  field :selected,  types.Boolean

	field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(coin, _args, _ctx) { coin.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(coin, _args, _ctx) { coin.created_at }
  end

end
