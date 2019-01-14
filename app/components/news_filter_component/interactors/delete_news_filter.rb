module NewsFilterComponent
  module Interactors
    class DeleteNewsFilter
      include Interactor

      def call
        context.news_filter.destroy!
      end
    end
  end
end
