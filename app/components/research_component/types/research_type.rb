ResearchComponent::Types::ResearchType = GraphQL::ObjectType.define do
  name 'Research'

  field :id, !types.ID
  field :research_type, types.String
  field :sourceUrl, types.String, property: :source_url
  field :title, types.String
  field :description, types.String
  field :timestamp, MiscComponent::Types::DateTimeType
  field :reference, types.String
  field :filePath, types.String, property: :file_path
  
  field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(research, _args, _ctx) { research.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(research, _args, _ctx) { research.created_at }
  end

  field :keywords do
    type types[KeywordComponent::Types::KeywordType]
    resolve ->(research, _args, _ctx) { research.keywords }
  end
  
end
