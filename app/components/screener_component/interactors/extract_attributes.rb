module ScreenerComponent
  module Interactors
    class ExtractAttributes
      include Interactor

      SCREENER_SCHEME = {
        name: :name,
        text: :text
      }.freeze

      SCREENER_FILTER_SCHEME = {
        name: :name,
        operator: :operator,
        category: :category,
        value: :value
      }.freeze

      def call
        args = context.args

        attributes        = extract_attributes(SCREENER_SCHEME, args)
        attributes[:user] = context.ctx[:current_user]

        filters = args[:filters]
        if filters
          attributes[:filters] = filters.map do |filter_args|
            extract_attributes(SCREENER_FILTER_SCHEME, filter_args)
          end
        end

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
