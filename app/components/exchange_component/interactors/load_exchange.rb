module ExchangeComponent
  module Interactors
    class LoadExchange
      include Interactor

      def call
        exchange = Exchange.find_by_id(context.args[:id])
        if exchange.present?
          context.exchange = exchange
        else
          msg = I18n.t('errors.messages.not_found', entity: 'Exchange')
          context.fail!(message: msg)
        end
      end
    end
  end
end
