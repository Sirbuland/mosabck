module NewsFilterComponent
  module Interactors
    class LoadNewsFilters
      include Interactor

      def call
        args = context.args
        news_filters_query = NewsFilter.all

        current_user = context.ctx[:current_user]
        if current_user.present?
          news_filters_query = news_filters_query.where(user_id: current_user.id)
        end

        ids = args[:ids]
        news_filters_query = news_filters_query.where(id: ids) if ids.present?

        context.news_filters = news_filters_query
      end
    end
  end
end
