module WalletComponent
  module Interactors
    class ExtractAttributes
      include Interactor

      WALLET_SCHEME = {
        name: :name,
        description: :description,
        imageLink: :image_link,
        sourceLink: :source_link,
        entryDate: :entry_date
      }.freeze

      def call
        args = context.args

        attributes        = extract_attributes(WALLET_SCHEME, args)
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
