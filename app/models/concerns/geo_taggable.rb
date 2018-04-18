module GeoTaggable
  extend ActiveSupport::Concern

  included do
    has_one :location, as: :locateable

    scope :find_in_rectangle, ->(coords) do
      joins(:location).where(
        'st_contains(st_makeenvelope(?, ?, ?, ?, 4326), locations.lonlat)',
        coords[:x_min],
        coords[:y_min],
        coords[:x_max],
        coords[:y_max]
      )
    end
  end
end
