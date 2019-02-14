module NewsFilterCreation
  extend ActiveSupport::Concern

  included do
    
    def create_news_filters
    	unless self.news_filters.present?	
        NewsFilter::DEFAULT_FILTERS.each do |filter|
          news_filter = self.news_filters.find_or_initialize_by name: filter[:name]
          news_filter.assign_attributes(
            filter.slice(
              :description, 
              :filter_type, 
              :search_term,
              :selected,
              :priority
            )
          )
          news_filter.save!
    		end
      end
  	end
  end
end
