AuthorComponent::Mutations::CreateAuthor = GraphQL::Relay::Mutation.define do
	name 'createAuthor'
	description 'create a new Author'

	return_field :author, AuthorComponent::Types::AuthorType

  input_field :name, types.String
  input_field :description, types.String
  input_field :avatar, types.String
  input_field :username, types.String
  input_field :profession, types.String

	resolve AuthorComponent::Resolvers::CreateAuthorResolver.new
end
