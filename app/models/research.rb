class Research < ApplicationRecord
  include AssetMappingLinkage
  # include votable functionality
  acts_as_votable

  belongs_to :user

  mount_uploader :attachment, FileUploader
  # belongs_to :primary_crypto_asset, class_name: "CryptoAsset"
  has_many :secondary_crypto_assets, through: :asset_mappings, source: :crypto_asset
	has_many :keyword_research_videos, dependent: :destroy
  has_many :keywords, through: :keyword_research_videos
  has_many :author_researches, dependent: :destroy
  has_many :authors, through: :author_researches

  def self.order_researches(field, direction = "DESC")
  	order("#{field} #{direction}")
  end

  def attachment_url
    attachment.url if attachment.present?
  end

end
