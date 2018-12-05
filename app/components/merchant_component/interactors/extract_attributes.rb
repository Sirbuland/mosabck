module MerchantComponent
  module Interactors
    class ExtractAttributes
      include Interactor

      MERCHANT_SCHEME = {
        assetProcessor: :asset_processor,
        merchant: :merchant,
        sourceUrl: :source_url,
        description: :description
      }.freeze

      def call
        args = context.args

        attributes        = extract_attributes(MERCHANT_SCHEME, args)
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
