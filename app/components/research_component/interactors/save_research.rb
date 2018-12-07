module ResearchComponent
  module Interactors
    class SaveResearch
      include Interactor

      def call
        authors = context.attributes.delete(:authors)
        keywords = context.attributes.delete(:keywords)
        crypto_assets = context.attributes.delete(:crypto_assets)

        # find or initialize research
        research = context.research || Research.new
        research.assign_attributes(context.attributes)
        research.save!

        # create associated authors for research
        create_authors( authors, research ) if authors
        # create associated keywords for research
        create_keywords( keywords, research ) if keywords
        # create associated secndary crypto_assets for research
        create_crypto_assets( crypto_assets, research ) if crypto_assets

        context.research = research
      end

      private

      def create_authors authors, research
        authors.each do |author_i, author_attributes|
          author_attributes[:researches] = [research]
          author = Author.new(author_attributes)
          author.save!
        end
      end

      def create_keywords keywords, research
        keywords.each do |keyword_i, keyword_attributes|
          keyword_attributes[:researches] = [research]
          keyword = Keyword.new(keyword_attributes)
          keyword.save!
        end
      end

      def create_crypto_assets crypto_assets, research
        crypto_assets.each do |crypto_asset_i, crypto_asset_attributes|
          crypto_asset_attributes[:researches] = [research]
          crypto_asset = CryptoAsset.new(crypto_asset_attributes)
          crypto_asset.save!
        end
      end
    end
  end
end
