class Event < ApplicationRecord
  serialize :recurrence, Montrose::Recurrence
  include AssetMappingLinkage
  include GeoTaggable

  EVENT_TYPES = { reservableEvent: 'reservable_event' }.freeze

  belongs_to :user
  has_many :crypto_assets, through: :asset_mappings
  has_many :resources, dependent: :destroy
end
