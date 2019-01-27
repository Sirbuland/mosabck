module NewsFilterComponent
  module Interactors
    class DeleteNewsFilter
      include Interactor

      def call
      	user = context.ctx[:current_user]
        user_filter = user.user_news_filters.find_by news_filter_id: context.news_filter.id
        news_filter = user_filter.news_filter
        user_filter.destroy!
        news_filter
      end
    end
  end
end
