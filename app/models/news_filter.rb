class NewsFilter < ApplicationRecord
  has_many :user_news_filters, dependent: :destroy
  has_many :users, through: :user_news_filters
end
