class Research < ApplicationRecord
  belongs_to :user
  has_many :asset_mappings
	has_many :keyword_research_videos
  has_many :keywords, through: :keyword_research_videos
end
