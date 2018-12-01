module WalletComponent
  module Interactors
    class LoadWallets
      include Interactor

      def call
        args = context.args
        wallets_query = Wallet.all

        current_user = context.ctx[:current_user]
        if current_user.present?
          wallets_query = wallets_query.where(user_id: current_user.id)
        end

        ids = args[:ids]
        wallets_query = wallets_query.where(id: ids) if ids.present?

        context.wallets = wallets_query
      end
    end
  end
end
