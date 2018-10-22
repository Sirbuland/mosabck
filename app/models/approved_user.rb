class ApprovedUser < ApplicationRecord
  validates :email, presence: true, length: { maximum: 255 }
  validates_email_format_of :email
end
