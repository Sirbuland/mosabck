class Wallet < ApplicationRecord
  include AssetMappingLinkage
  
  belongs_to :user
  has_many :crypto_assets, through: :asset_mappings
end
