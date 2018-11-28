module PanelComponent
  module Resolvers
    class CreatePanelResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        PanelComponent::Organizers::CreatePanel
      end

      def on_success_return(result)
        { dashboard: result.dashboard }
      end
    end
  end
end
