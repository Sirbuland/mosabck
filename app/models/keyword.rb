class Keyword < ApplicationRecord
	acts_as_paranoid

  has_many :keyword_research_videos
	has_many :researches, through: :keyword_research_videos

end
