class KeywordResearchVideo < ApplicationRecord
acts_as_paranoid
  
  belongs_to :keyword, optional: true
  belongs_to :research, optional: true
  belongs_to :video, optional: true
end
