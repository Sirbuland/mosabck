module EventComponent
  module Interactors
    class SaveEvent
      include Interactor

      def call
        event = context.event || Event.new
        event.update!(context.attributes)
        context.event = event
      end
    end
  end
end
