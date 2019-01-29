module NewsFilterCreation
  extend ActiveSupport::Concern

  included do
  	after_create :create_news_filters
  	
  	default_filters = ["bitcoin", "ethereum", "xrp", "eos", "bitcoin", "cash", "china", "venture", "capital", "ico", "partnership"]
  	
		def create_news_filters
			# quick hack: should be fixed
			default_filters = ["bitcoin", "ethereum", "xrp", "eos", "bitcoin", "cash", "china", "venture", "capital", "ico", "partnership"]
  		default_filters.each do |filter|
  			news_filter = NewsFilter.find_by name: filter
  			self.news_filters << news_filter if news_filter.present?
  		end
  	end
  end
end
