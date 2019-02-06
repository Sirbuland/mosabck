class Research < ApplicationRecord
  extend FriendlyId
  include AssetMappingLinkage
  include CreateSlug
  acts_as_paranoid

  # create friendly id for research using title
  friendly_id :create_slug, use: :slugged

  # include votable functionality
  acts_as_votable

  belongs_to :user

  # belongs_to :primary_crypto_asset, class_name: "CryptoAsset"
  has_many :secondary_crypto_assets, through: :asset_mappings, source: :crypto_asset
	has_many :keyword_research_videos
  has_many :keywords, through: :keyword_research_videos
  has_many :author_researches
  has_many :authors, through: :author_researches

  # files will be attached to research using attachments model
  has_many :attachments, as: :attachable

  scope :published, -> { where(published: true) }

  def self.order_researches(field, direction = "DESC")
  	order("#{field} #{direction}")
  end

end
