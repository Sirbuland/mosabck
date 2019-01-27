module NewsFilterComponent
  module Interactors
    class LoadNewsFilters
      include Interactor

      def call
        args = context.args
        news_filters = []

        current_user = context.ctx[:current_user]

        if current_user.present?
          news_filters_query = current_user.news_filters
        else
          news_filters_query = NewsFilter.all
        end

        context.news_filters = news_filters_query
      end
    end
  end
end
