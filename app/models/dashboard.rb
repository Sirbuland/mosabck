class Dashboard < ApplicationRecord
  
  acts_as_paranoid
	
  has_many :panels, dependent: :destroy
	has_many :coins, dependent: :destroy

	belongs_to :user
end
