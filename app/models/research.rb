class Research < ApplicationRecord
  include AssetMappingLinkage
	
  belongs_to :user
	has_many :keyword_research_videos
  has_many :keywords, through: :keyword_research_videos
end
