module ResearchComponent
  module Interactors
    class ExtractAttributes
      include Interactor

      RESEARCH_SCHEME = {
        researchType: :research_type,
        sourceUrl: :source_url,
        title: :title,
        description: :description,
        dateAuthored: :date_authored,
        reference: :reference,
        filePath: :file_path,
        rating: :rating
      }.freeze

      AUTHOR_SCHEME = {
        name: :name,
        description: :description
      }.freeze

      KEYWORD_SCHEME = {
        name: :name,
        description: :description
      }.freeze

      CRYPTO_ASSET_SCHEME = {
        name: :name,
        attribute1: :attribute1,
        attribute2: :attribute2
      }.freeze

      VOTES_FOR_SCHEME = {
        voterId: :voter_id,
        votableId: :votable_id,
        voterType: :voter_type
      }.freeze

      def call
        args = context.args

        attributes        = extract_attributes( RESEARCH_SCHEME, args )
        attributes[:user] = context.ctx[:current_user]

        # extract authors attributes
        authors_attributes( args[:authors], attributes )
        # extract keywords attributes
        keywords_attributes( args[:keywords], attributes )
        # extract secondary crypto_asset attributes
        crypto_assets_attributes( args[:secondaryCryptoAssets], attributes )
        # extract voter attributes
        votes_for_attributes( args[:votesFor], attributes )

        context.attributes = attributes
      end

      private

      def authors_attributes authors, research_attributes
        if authors
          research_attributes[:authors] = {}

          # extract each author attributes
          authors.each_with_index do |author_args, author_i|
            research_attributes[:authors][author_i] = extract_attributes(AUTHOR_SCHEME, author_args)
          end
        end
      end

      def keywords_attributes keywords, research_attributes
        if keywords
          research_attributes[:keywords] = {}

          # extract each keyword attributes
          keywords.each_with_index do |keyword_args, keyword_i|
            research_attributes[:keywords][keyword_i] = extract_attributes(KEYWORD_SCHEME, keyword_args)
          end
        end
      end

      def crypto_assets_attributes crypto_assets, research_attributes
        if crypto_assets
          research_attributes[:crypto_assets] = {}

          # extract each crypto_asset attributes
          crypto_assets.each_with_index do |crypto_asset_args, crypto_asset_i|
            research_attributes[:crypto_assets][crypto_asset_i] = extract_attributes(CRYPTO_ASSET_SCHEME, crypto_asset_args)
          end
        end
      end

      def votes_for_attributes votes, research_attributes
        if votes
          research_attributes[:votes_for] = {}

          # extract each crypto_asset attributes
          votes.each_with_index do |votes_for_args, votes_for_i|
            research_attributes[:votes_for][votes_for_i] = extract_attributes(VOTES_FOR_SCHEME, votes_for_args)
          end
        end
      end

      def extract_attributes(scheme, args)
        MiscComponent::Interactors::ExtractAttributes.call(
          scheme: scheme, args: args
        ).attributes
      end
    end
  end
end
