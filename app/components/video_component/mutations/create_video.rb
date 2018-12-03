VideoComponent::Mutations::CreateVideo = GraphQL::Relay::Mutation.define do
	name 'createVideo'
	description 'create a new video'

	return_field :video, VideoComponent::Types::VideoType

	input_field :title, types.String
	input_field :videoType, types.String
	input_field :timestamp, types.String
	input_field :description, types.String
	input_field :sourceUrl, types.String

	resolve VideoComponent::Resolvers::CreateVideoResolver.new
end
