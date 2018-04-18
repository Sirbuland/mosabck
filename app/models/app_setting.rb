class AppSetting < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  scope :active, -> { where(active: true) }
end
