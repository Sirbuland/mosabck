module ScreenerComponent
  module Resolvers
    class GetScreenersResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        ScreenerComponent::Interactors::LoadScreeners
      end

      def on_success_return(result)
        result.screeners
      end
    end
  end
end
