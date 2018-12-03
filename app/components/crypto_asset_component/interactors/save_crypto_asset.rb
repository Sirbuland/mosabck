module CryptoAssetComponent
  module Interactors
    class SaveCryptoAsset
      include Interactor

      def call
        crypto_asset = context.crypto_asset || CryptoAsset.new
        crypto_asset.update!(context.attributes)
        context.crypto_asset = crypto_asset
      end
    end
  end
end
