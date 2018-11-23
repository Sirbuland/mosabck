class Dashboard < ApplicationRecord
	has_many :panels
	has_many :folders
end
