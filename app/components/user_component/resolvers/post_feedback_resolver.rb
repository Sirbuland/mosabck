module UserComponent
  module Resolvers
    class PostFeedbackResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        UserComponent::Interactors::PostFeedback
      end

      def on_success_return(result)
        { result: result.result }
      end
    end
  end
end
