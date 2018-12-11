class Research < ApplicationRecord
  include AssetMappingLinkage
  # include votable functionality
  acts_as_votable

  ORDER_FIELD_NAMES = {
    "rating" => "cached_votes_total",
    "date_authored" => "date_authored"
  }
	
  belongs_to :user
  # belongs_to :primary_crypto_asset, class_name: "CryptoAsset"
  has_many :secondary_crypto_assets, through: :asset_mappings, source: :crypto_asset
	has_many :keyword_research_videos, dependent: :destroy
  has_many :keywords, through: :keyword_research_videos
  has_many :author_researches, dependent: :destroy
  has_many :authors, through: :author_researches

  def self.order_researches(field, direction = "DESC")
  	order("#{ORDER_FIELD_NAMES[field]} #{direction}")
  end

  has_one_attached :attachment

end
