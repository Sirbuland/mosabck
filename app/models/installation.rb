class Installation < ApplicationRecord
  belongs_to :user
  has_one :token
end
