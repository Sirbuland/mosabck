class UserNewsFilter < ApplicationRecord
  belongs_to :user
  belongs_to :news_filter
end
