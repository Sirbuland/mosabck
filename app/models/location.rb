class Location < ApplicationRecord
  validates :locateable_id, :locateable_type, presence: true
  validates :locateable_type, inclusion: { in: %w[Post User] }
end
