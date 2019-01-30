class NewsFilter < ApplicationRecord
  has_many :user_news_filters, dependent: :destroy
  has_many :users, through: :user_news_filters

  DEFAULT_FILTERS = ["bitcoin", "ethereum", "xrp", "eos", "bitcoin cash", "china", "venture capital", "ico", "partnership"]
  
end
