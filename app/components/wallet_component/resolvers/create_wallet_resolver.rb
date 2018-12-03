module WalletComponent
  module Resolvers
    class CreateWalletResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        WalletComponent::Organizers::CreateWallet
      end

      def on_success_return(result)
        { wallet: result.wallet }
      end
    end
  end
end
