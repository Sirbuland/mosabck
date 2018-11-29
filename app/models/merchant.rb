class Merchant < ApplicationRecord
  belongs_to :user
  has_many :asset_mappings
end
