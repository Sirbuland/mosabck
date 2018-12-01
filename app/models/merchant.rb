class Merchant < ApplicationRecord
  belongs_to :user
  has_many :asset_mappings
  has_many :crypto_assets, through: :asset_mappings
end
