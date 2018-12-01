KeywordComponent::Types::KeywordType = GraphQL::ObjectType.define do
	name 'Keyword'

  field :id, !types.ID
  field :name, types.String
  field :description, types.String

	field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(keyword, _args, _ctx) { keyword.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(keyword, _args, _ctx) { keyword.created_at }
  end

end
