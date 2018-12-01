module ExchangeComponent
  module Resolvers
    class GetExchangesResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        ExchangeComponent::Interactors::LoadExchanges
      end

      def on_success_return(result)
        result.exchanges
      end
    end
  end
end
