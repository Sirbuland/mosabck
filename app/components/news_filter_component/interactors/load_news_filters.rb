module NewsFilterComponent
  module Interactors
    class LoadNewsFilters
      include Interactor

      def call
        args = context.args
        search_by = args[:searchBy]
        search_term = args[:searchTerm]
        news_filters = []

        current_user = context.ctx[:current_user]

        if current_user.present?
          news_filters_query = current_user.news_filters
        else
          news_filters_query = NewsFilter.all
        end

        if search_term.present? and search_by.present?
          fields_hash = GraphqlHelper::NEWS_FILTER_SEARCH_BY.invert
          search_by.each do |searh_by_field|
            field = fields_hash[searh_by_field]
            news_filters_query =
              news_filters_query.where("#{field} ilike ?", "%#{search_term}%")
          end
        end

        context.news_filters = news_filters_query.where("priority != 0").order("priority ASC")
      end
    end
  end
end
