module AuthorComponent
  module Interactors
    class ExtractAttributes
      include Interactor

      AUTHOR_SCHEME = {
        title: :title,
        description: :description,
        timestamp: :timestamp,
        reference: :reference,
        filePath: :file_path
      }.freeze

      def call
        args = context.args

        attributes        = extract_attributes(AUTHOR_SCHEME, args)
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
