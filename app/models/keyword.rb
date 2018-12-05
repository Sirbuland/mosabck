class Keyword < ApplicationRecord
	has_many :keyword_research_videos
	has_many :researches, through: :keyword_research_videos
end
