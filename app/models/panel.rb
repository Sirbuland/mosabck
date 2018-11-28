class Panel < ApplicationRecord
  belongs_to :dashboard
  has_many   :panel_vars
  has_many   :vars, through: :panel_vars
end
