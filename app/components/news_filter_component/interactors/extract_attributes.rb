module NewsFilterComponent
  module Interactors
    class ExtractAttributes
      include Interactor

      NEWS_FILTER_SCHEME = {
        name: :name,
        description: :description,
        selected: :selected,
        searchTerm: :search_term,
        filterType: :filter_type
      }.freeze

      def call
        args = context.args
        attributes = extract_attributes(NEWS_FILTER_SCHEME, args)
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
