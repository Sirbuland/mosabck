class KeywordResearchVideo < ApplicationRecord
  belongs_to :keyword
  belongs_to :research
  belongs_to :video
end
