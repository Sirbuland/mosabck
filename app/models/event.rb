class Event < ApplicationRecord
  serialize :recurrence, Montrose::Recurrence
  include GeoTaggable

  EVENT_TYPES = { reservableEvent: 'reservable_event' }.freeze

  belongs_to :user

  has_many :reservations
end
