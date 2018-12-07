module ResearchComponent
  module Resolvers
    class DeleteResearchResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        ResearchComponent::Organizers::DeleteResearch
      end

      def on_success_return(result)
        { research: result.research }
      end
    end
  end
end
