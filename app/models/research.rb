class Research < ApplicationRecord
  extend FriendlyId
  include AssetMappingLinkage

  # create friendly id for research using title
  friendly_id :create_slug, use: :slugged

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

  # files will be attached to research using attachments model
  has_many :attachments, as: :attachable

  def self.order_researches(field, direction = "DESC")
  	order("#{field} #{direction}")
  end

  def attachment_url
    attachment.url if attachment.present?
  end

  def create_slug
    "#{title}"
  end

  def normalize_friendly_id(string)
    super[0..30]
  end
end
