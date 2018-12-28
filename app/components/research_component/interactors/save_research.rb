module ResearchComponent
  module Interactors
    class SaveResearch
      include Interactor

      def call
        authors = context.attributes.delete(:authors)
        keywords = context.attributes.delete(:keywords)
        crypto_assets = context.attributes.delete(:secondary_crypto_assets)
        votes_for = context.attributes.delete(:votes_for)
        attachments = context.attributes.delete(:attachments)

        # find or initialize research
        research = context.research || Research.new
        research.assign_attributes(context.attributes)
        research.save!

        # create or update associated authors for research
        create_or_update_authors( authors, research ) if authors
        # create associated keywords for research
        create_keywords( keywords, research ) if keywords
        # create associated secndary crypto_assets for research
        create_crypto_assets( crypto_assets, research ) if crypto_assets
        # attach multiple files to research
        create_attachments( attachments, research ) if attachments
        # cast vote for research
        cast_votes_on_research( votes_for, research ) if votes_for

        context.research = research
      end

      private

      def create_or_update_authors authors, research
        # remove all authors from research if empty array is supplied
        research.authors.destroy_all unless authors.present?
        # create new authors from supplied array
        authors.each do |author_i, author_attributes|
          author = Author.find_or_initialize_by username: author_attributes[:username]
          author_attributes[:researches] = [research]
          author.assign_attributes(author_attributes)
          author.save!
        end
      end

      def create_keywords keywords, research
        # remove all keywords from research if empty array is supplied
        research.keywords.destroy_all unless keywords.present?
        # create new keywords from supplied array
        keywords.each do |keyword_i, keyword_attributes|
          keyword_attributes[:researches] = [research]
          keyword = Keyword.new(keyword_attributes)
          keyword.save!
        end
      end

      def create_crypto_assets crypto_assets, research
        # remove all secondary_crypto_assets from research if empty array is supplied
        research.secondary_crypto_assets.destroy_all unless crypto_assets.present?
        # create new secondary_crypto_assets from supplied array
        crypto_assets.each do |crypto_asset_i, crypto_asset_attributes|
          crypto_asset_attributes[:researches] = [research]
          crypto_asset = CryptoAsset.new(crypto_asset_attributes)
          crypto_asset.save!
        end
      end

      def create_attachments attachments, research
        attachments.each do | attachment_i, attachment_attributes |
          attachment = research.attachments.new(attachment_attributes)
          attachment.save!
        end
      end

      def cast_votes_on_research votes_for, research
        votes_for.each do |votes_for_i, votes_for_attributes|
          voter = User.find_by id: votes_for_attributes[:voter_id]
          research.vote_by voter: voter
        end
      end
    end
  end
end
