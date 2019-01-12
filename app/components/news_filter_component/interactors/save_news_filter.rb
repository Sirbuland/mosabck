module NewsFilterComponent
  module Interactors
    class SaveNewsFilter
      include Interactor

      def call
        news_filter = context.news_filter || NewsFilter.new
        news_filter.update!(context.attributes)
        context.news_filter = news_filter
      end
    end
  end
end
