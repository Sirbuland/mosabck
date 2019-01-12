module NewsFilterComponent
  module Resolvers
    class GetNewsFiltersResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        NewsFilterComponent::Interactors::LoadNewsFilters
      end

      def on_success_return(result)
        result.news_filters
      end
    end
  end
end
