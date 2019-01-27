module NewsFilterComponent
  module Resolvers
    class UpdateNewsFilterResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        NewsFilterComponent::Organizers::UpdateNewsFilter
      end

      def on_success_return(result)
        { newsFilter: result.news_filter }
      end
    end
  end
end
