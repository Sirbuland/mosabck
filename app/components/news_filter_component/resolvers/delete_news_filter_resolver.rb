module NewsFilterComponent
  module Resolvers
    class DeleteNewsFilterResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        NewsFilterComponent::Organizers::DeleteNewsFilter
      end

      def on_success_return(result)
        { newsFilter: result.news_filter }
      end
    end
  end
end
