module CryptoAssetComponent
  module Resolvers
    class CreateCryptoAssetResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        CryptoAssetComponent::Organizers::CreateCryptoAsset
      end

      def on_success_return(result)
        { crypto_asset: result.crypto_asset }
      end
    end
  end
end
