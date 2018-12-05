class Event < ApplicationRecord
  serialize :recurrence, Montrose::Recurrence
  include AssetMappingLinkage
  include GeoTaggable

  EVENT_TYPES = { reservableEvent: 'reservable_event' }.freeze

  belongs_to :user
end
