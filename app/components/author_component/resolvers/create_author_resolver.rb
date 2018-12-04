module AuthorComponent
  module Resolvers
    class CreateAuthorResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        AuthorComponent::Organizers::CreateAuthor
      end

      def on_success_return(result)
        { author: result.author }
      end
    end
  end
end
