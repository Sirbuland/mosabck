module EventComponent
  module Resolvers
    class CreateEventResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        EventComponent::Organizers::CreateEvent
      end

      def on_success_return(result)
        { event: result.event }
      end
    end
  end
end
