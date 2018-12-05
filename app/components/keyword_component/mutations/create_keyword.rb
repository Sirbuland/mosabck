KeywordComponent::Mutations::CreateKeyword = GraphQL::Relay::Mutation.define do
	name 'createKeyword'
	description 'create a new keyword'

	return_field :keyword, KeywordComponent::Types::KeywordType

  input_field :name, types.String
  input_field :description, types.String

	resolve KeywordComponent::Resolvers::CreateKeywordResolver.new
end
