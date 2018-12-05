module ResourceComponent
  module Interactors
    class ExtractAttributes
      include Interactor

      RESOURCE_SCHEME = {
        name: :name,
        attribute1: :attribute1,
        attribute2: :attribute2,
        description: :description
      }.freeze

      def call
        args = context.args
        attributes = extract_attributes(RESOURCE_SCHEME, args)
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
