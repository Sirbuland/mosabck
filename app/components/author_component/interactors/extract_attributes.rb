module AuthorComponent
  module Interactors
    class ExtractAttributes
      include Interactor

      AUTHOR_SCHEME = {
        description: :description,
        username: :username,
        profession: :profession,
        avatar: :avatar        
      }.freeze

      def call
        args = context.args
        attributes = extract_attributes(AUTHOR_SCHEME, args)
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
