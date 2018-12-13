class Research < ApplicationRecord
  include AssetMappingLinkage
  # include votable functionality
  acts_as_votable

  attribute :attachment_url

  belongs_to :user
  # belongs_to :primary_crypto_asset, class_name: "CryptoAsset"
  has_many :secondary_crypto_assets, through: :asset_mappings, source: :crypto_asset
	has_many :keyword_research_videos, dependent: :destroy
  has_many :keywords, through: :keyword_research_videos
  has_many :author_researches, dependent: :destroy
  has_many :authors, through: :author_researches

  def self.order_researches(field, direction = "DESC")
  	order("#{field} #{direction}")
  end

  has_one_attached :attachment

  validate :correct_attachment_mime_type

  def correct_attachment_mime_type
    if attachment.attached? and !attachment.content_type.in?(%w(image/jpg image/jpeg image/png application/pdf))
      errors.add(:attachment, 'Must be a PDF or an Image file')
    end
  end

  def attachment_url
    attachment.service_url if attachment.attached?
  end

end
