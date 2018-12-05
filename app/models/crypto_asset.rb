class CryptoAsset < ApplicationRecord
  include AssetMappingLinkage
	
	has_many :merchants, through: :asset_mappings
	has_many :researches, through: :asset_mappings
	has_many :exchanges, through: :asset_mappings
end
