module NewsFilterCreation
  extend ActiveSupport::Concern

  included do
    
    def create_news_filters
    	unless self.news_filters.present?	
        NewsFilter::DEFAULT_FILTERS.each do |filter|
          news_filter = NewsFilter.find_by name: filter
          if news_filter.present? and !self.news_filters.exists? name: news_filter.name
      			self.news_filters << news_filter
          end
    		end
      end
  	end
  end
end
