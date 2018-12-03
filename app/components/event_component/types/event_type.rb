EventComponent::Types::EventType = GraphQL::ObjectType.define do
	name 'Event'

  field :id, !types.ID
  field :eventType, types.String, property: :event_type
  field :title, types.String
  field :timestamp, MiscComponent::Types::DateTimeType
  field :description, types.String
  field :importance, types.String

	field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(event, _args, _ctx) { event.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(event, _args, _ctx) { event.created_at }
  end

  field :cryptoAssets do
    type types[CryptoAssetComponent::Types::CryptoAssetType]
    resolve ->(merchant, _args, _ctx) { merchant.crypto_assets }
  end

end
