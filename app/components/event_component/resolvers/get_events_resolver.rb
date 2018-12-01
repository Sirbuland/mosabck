module EventComponent
  module Resolvers
    class GetEventsResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        EventComponent::Interactors::LoadEvents
      end

      def on_success_return(result)
        result.events
      end
    end
  end
end
