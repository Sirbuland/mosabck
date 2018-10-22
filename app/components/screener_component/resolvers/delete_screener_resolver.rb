module ScreenerComponent
  module Resolvers
    class DeleteScreenerResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        ScreenerComponent::Organizers::DeleteScreener
      end

      def on_success_return(result)
        { screener: result.screener }
      end
    end
  end
end
