class Video < ApplicationRecord
  include AssetMappingLinkage

  belongs_to :user
  has_many :persons, dependent: :destroy
  has_many :crypto_assets, through: :asset_mappings
	has_many :keyword_research_videos, dependent: :destroy
	has_many :keywords, through: :keyword_research_videos
end
