module ExchangeComponent
  module Resolvers
    class CreateExchangeResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        ExchangeComponent::Organizers::CreateExchange
      end

      def on_success_return(result)
        { exchange: result.exchange }
      end
    end
  end
end
