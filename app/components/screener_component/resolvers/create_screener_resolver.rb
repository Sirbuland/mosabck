module ScreenerComponent
  module Resolvers
    class CreateScreenerResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        ScreenerComponent::Organizers::CreateScreener
      end

      def on_success_return(result)
        { screener: result.screener }
      end
    end
  end
end
