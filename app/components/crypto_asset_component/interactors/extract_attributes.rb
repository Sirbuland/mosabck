module CryptoAssetComponent
  module Interactors
    class ExtractAttributes
      include Interactor

      CRYPTO_ASSET_SCHEME = {
        name: :name,
        attribute1: :attribute1,
        attribute2: :attribute2
      }.freeze

      def call
        args = context.args

        attributes        = extract_attributes(CRYPTO_ASSET_SCHEME, args)
        attributes[:user] = context.ctx[:current_user]

        context.attributes = attributes
      end

      private

      def extract_attributes(scheme, args)
        MiscComponent::Interactors::ExtractAttributes.call(
          scheme: scheme, args: args
        ).attributes
      end
    end
  end
end
