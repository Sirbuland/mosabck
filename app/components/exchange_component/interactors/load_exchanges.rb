module ExchangeComponent
  module Interactors
    class LoadExchanges
      include Interactor

      def call
        args = context.args
        exchanges_query = Exchange.all

        current_user = context.ctx[:current_user]
        if current_user.present?
          exchanges_query = exchanges_query.where(user_id: current_user.id)
        end

        ids = args[:ids]
        exchanges_query = exchanges_query.where(id: ids) if ids.present?

        context.exchanges = exchanges_query
      end
    end
  end
end
