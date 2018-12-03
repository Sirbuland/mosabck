module ResearchComponent
  module Resolvers
    class CreateResearchResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        ResearchComponent::Organizers::CreateResearch
      end

      def on_success_return(result)
        { research: result.research }
      end
    end
  end
end
