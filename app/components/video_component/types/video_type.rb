VideoComponent::Types::VideoType = GraphQL::ObjectType.define do
	name 'Video'

  field :id, !types.ID
  field :title, types.String
  field :videoType, types.String, property: :video_type
  field :timestamp, types.String
  field :description, types.String
  field :sourceUrl, types.String, property: :source_url


	field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(video, _args, _ctx) { video.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(video, _args, _ctx) { video.created_at }
  end

  field :persons do
    type types[PersonComponent::Types::PersonType]
    resolve ->(video, _args, _ctx) { video.persons }
  end

  field :keywords do
    type types[KeywordComponent::Types::KeywordType]
    resolve ->(video, _args, _ctx) { video.keywords }
  end

end
