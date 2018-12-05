module KeywordComponent
  module Resolvers
    class CreateKeywordResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        KeywordComponent::Organizers::CreateKeyword
      end

      def on_success_return(result)
        { keyword: result.keyword }
      end
    end
  end
end
