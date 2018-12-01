class Video < ApplicationRecord
  belongs_to :user
  has_many :asset_mappings
  has_many :persons
end
