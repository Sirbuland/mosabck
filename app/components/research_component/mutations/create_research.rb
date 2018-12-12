ResearchComponent::Mutations::CreateResearch = GraphQL::Relay::Mutation.define do
	name 'createResearch'
	description 'create a new research'

	return_field :research, ResearchComponent::Types::ResearchType

	input_field :researchType, types.String
  input_field :sourceUrl, types.String
  input_field :title, types.String
  input_field :description, types.String
  input_field :dateAuthored, MiscComponent::Types::DateTimeType
  input_field :reference, types.String
  input_field :rating, types.Int
  input_field :filePath, types.String
  input_field :authors,
    types[ResearchComponent::Types::Inputs::AuthorInputType]
  input_field :keywords,
    types[ResearchComponent::Types::Inputs::KeywordInputType]

  input_field :secondaryCryptoAssets,
    types[ResearchComponent::Types::Inputs::CryptoAssetInputType]

  input_field :votesFor,
    types[ResearchComponent::Types::Inputs::VoteForInputType]

	resolve ResearchComponent::Resolvers::CreateResearchResolver.new
end
