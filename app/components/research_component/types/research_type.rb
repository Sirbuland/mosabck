ResearchComponent::Types::ResearchType = GraphQL::ObjectType.define do
  name 'Research'

  field :id, !types.ID
  field :researchType, types.String, property: :research_type
  field :sourceUrl, types.String, property: :source_url
  field :title, types.String
  field :slug, types.String
  field :description, types.String
  field :dateAuthored, MiscComponent::Types::DateTimeType, property: :date_authored
  field :reference, types.String
  field :filePath, types.String, property: :file_path
  field :attachmentUrl, types.String, property: :attachment_url
  field :cachedVotesTotal, types.String, property: :cached_votes_total

  field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(research, _args, _ctx) { research.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(research, _args, _ctx) { research.created_at }
  end

  field :secondaryCryptoAssets do
    type types[CryptoAssetComponent::Types::CryptoAssetType]
    resolve ->(research, _args, _cts) { research.secondary_crypto_assets }
  end

  field :authors do
    type types[AuthorComponent::Types::AuthorType]
    resolve ->(research, _args, _cts) { research.authors }
  end

  field :keywords do
    type types[KeywordComponent::Types::KeywordType]
    resolve ->(research, _args, _ctx) { research.keywords }
  end

  field :votesFor do
    type types[MiscComponent::Types::VoteType]
    resolve ->(research, _args, _ctx) { research.votes_for }
  end

end
