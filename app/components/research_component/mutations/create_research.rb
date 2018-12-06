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
  input_field :filePath, types.String

	resolve ResearchComponent::Resolvers::CreateResearchResolver.new
end
