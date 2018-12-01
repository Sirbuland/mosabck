module AuthorComponent
  module Resolvers
    class GetAuthorsResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        AuthorComponent::Interactors::LoadAuthors
      end

      def on_success_return(result)
        result.authors
      end
    end
  end
end
