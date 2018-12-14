class Coin < ApplicationRecord
  belongs_to :dashboard, optional: true
  belongs_to :panel, optional: true
end
