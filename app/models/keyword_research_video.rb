class KeywordResearchVideo < ApplicationRecord
  belongs_to :keyword, optional: true
  belongs_to :research, optional: true
  belongs_to :video, optional: true
end
