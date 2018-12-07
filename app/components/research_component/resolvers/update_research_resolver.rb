module ResearchComponent
  module Resolvers
    class UpdateResearchResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        ResearchComponent::Organizers::UpdateResearch
      end

      def on_success_return(result)
        { research: result.research }
      end
    end
  end
end
