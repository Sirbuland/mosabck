VideoComponent::Types::VideoType = GraphQL::ObjectType.define do
	name 'Video'

  field :id, !types.ID
  field :title, types.String
  field :video_type, types.String
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
    resolve ->(person, _args, _ctx) { person.panels }
  end

end
