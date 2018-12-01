class Author < ApplicationRecord
	has_many :author_researches
	has_many :researches, through: :author_researches
end
