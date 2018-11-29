module ExchangeComponent
  module Interactors
    class SaveExchange
      include Interactor

      def call
        exchange = context.exchange || Exchange.new
        exchange.update!(context.attributes)
        context.exchange = exchange
      end
    end
  end
end
