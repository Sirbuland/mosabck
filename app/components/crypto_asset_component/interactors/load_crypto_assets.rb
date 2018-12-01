module CryptoAssetComponent
  module Interactors
    class LoadCryptoAssets
      include Interactor

      def call
        args = context.args
        crypto_assets_query = CryptoAsset.all

        current_user = context.ctx[:current_user]
        if current_user.present?
          crypto_assets_query = crypto_assets_query.where(user_id: current_user.id)
        end

        ids = args[:ids]
        crypto_assets_query = crypto_assets_query.where(id: ids) if ids.present?

        context.crypto_assets = crypto_assets_query
      end
    end
  end
end
