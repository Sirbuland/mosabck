module KeywordComponent
  module Resolvers
    class GetKeywordsResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        KeywordComponent::Interactors::LoadKeywords
      end

      def on_success_return(result)
        result.keywords
      end
    end
  end
end
