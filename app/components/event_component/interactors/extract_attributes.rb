module EventComponent
  module Interactors
    class ExtractAttributes
      include Interactor

      EVENT_SCHEME = {
        eventType: :event_type,
        title: :title,
        timestamp: :timestamp,
        description: :description,
        importance: :importance
      }.freeze


      def call
        args = context.args

        # extract event attributes
        attributes        = extract_attributes(EVENT_SCHEME, args)
        attributes[:user] = context.ctx[:current_user]

        context.attributes = attributes
      end

      private

      def extract_attributes(scheme, args)
        MiscComponent::Interactors::ExtractAttributes.call(
          scheme: scheme, args: args
        ).attributes
      end
    end
  end
end
