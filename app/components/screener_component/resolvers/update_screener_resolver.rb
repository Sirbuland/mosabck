module ScreenerComponent
  module Resolvers
    class UpdateScreenerResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        ScreenerComponent::Organizers::UpdateScreener
      end

      def on_success_return(result)
        { screener: result.screener }
      end
    end
  end
end
