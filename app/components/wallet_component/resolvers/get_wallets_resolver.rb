module WalletComponent
  module Resolvers
    class GetWalletsResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        WalletComponent::Interactors::LoadWallets
      end

      def on_success_return(result)
        result.wallets
      end
    end
  end
end
