KeywordComponent::Mutations::CreateKeyword = GraphQL::Relay::Mutation.define do
	name 'createKeyword'
	description 'create a new keyword'

	return_field :keyword, KeywordComponent::Types::KeywordType

  input_field :sourceUrl, types.String
  input_field :title, types.String
  input_field :description, types.String
  input_field :timestamp, MiscComponent::Types::DateTimeType
  input_field :reference, types.String
  input_field :filePath, types.String

	resolve KeywordComponent::Resolvers::CreateKeywordResolver.new
end
