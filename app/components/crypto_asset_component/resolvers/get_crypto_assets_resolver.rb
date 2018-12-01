module CryptoAssetComponent
  module Resolvers
    class GetCryptoAssetsResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        CryptoAssetComponent::Interactors::LoadCryptoAssets
      end

      def on_success_return(result)
        result.crypto_assets
      end
    end
  end
end
