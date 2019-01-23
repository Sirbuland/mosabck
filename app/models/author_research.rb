class AuthorResearch < ApplicationRecord
  acts_as_paranoid

  belongs_to :research
  belongs_to :author

end
