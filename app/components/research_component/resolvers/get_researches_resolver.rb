module ResearchComponent
  module Resolvers
    class GetResearchesResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        ResearchComponent::Interactors::LoadResearches
      end

      def on_success_return(result)
        result.researches
      end
    end
  end
end
