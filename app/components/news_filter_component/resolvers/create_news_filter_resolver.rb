module NewsFilterComponent
  module Resolvers
    class CreateNewsFilterResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        NewsFilterComponent::Organizers::CreateNewsFilter
      end

      def on_success_return(result)
        { newsFilter: result.news_filter }
      end
    end
  end
end
