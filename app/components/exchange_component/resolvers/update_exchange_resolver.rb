module ExchangeComponent
  module Resolvers
    class UpdateExchangeResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        ExchangeComponent::Organizers::UpdateExchange
      end

      def on_success_return(result)
        { exchange: result.exchange }
      end
    end
  end
end
