module KeywordComponent
  module Interactors
    class ExtractAttributes
      include Interactor

      KEYWORD_SCHEME = {
        name: :name,
        description: :description
      }.freeze

      def call
        args = context.args

        attributes        = extract_attributes(KEYWORD_SCHEME, args)
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
