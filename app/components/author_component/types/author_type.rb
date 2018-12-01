AuthorComponent::Types::AuthorType = GraphQL::ObjectType.define do
	name 'author'

	field :id,    !types.ID
	field :name,   types.String
  field :description, types.String

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
