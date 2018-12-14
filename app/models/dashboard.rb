class Dashboard < ApplicationRecord
	has_many :panels, dependent: :destroy
	has_many :coins, dependent: :destroy

	belongs_to :user
end
