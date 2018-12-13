AuthorComponent::Types::AuthorType = GraphQL::ObjectType.define do
	name 'author'

	field :id,    !types.ID
  field :description, types.String
  field :avatarUrl, types.String, property: :avatar_url
  field :profession, types.String
  field :username, types.String

	field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(author, _args, _ctx) { author.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(author, _args, _ctx) { author.created_at }
  end

  field :researches do
    type types[ResearchComponent::Types::ResearchType]
    resolve -> (author, _args, _ctx) { author.researches }
  end
end
