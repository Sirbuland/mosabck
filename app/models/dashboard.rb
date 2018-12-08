class Dashboard < ApplicationRecord
	has_many :panels, dependent: :destroy

	belongs_to :user
end
