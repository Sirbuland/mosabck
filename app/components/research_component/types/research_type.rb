ResearchComponent::Types::ResearchType = GraphQL::ObjectType.define do
  name 'Research'

  field :id, !types.ID
  field :research_type, !types.String
  field :source_url, !types.String
  field :title, !types.String
  field :description, !types.String
  field :timestamp, !types.String
  field :reference, !types.String
  field :file_path, !types.String
  
  field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(research, _args, _ctx) { research.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(research, _args, _ctx) { research.created_at }
  end
  
end
