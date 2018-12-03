module WalletComponent
  module Interactors
    class SaveWallet
      include Interactor

      def call
        wallet = context.wallet || Wallet.new
        wallet.update!(context.attributes)
        context.wallet = wallet
      end
    end
  end
end
