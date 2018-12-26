ResearchComponent::Types::Inputs::AttachmentInputType =
  GraphQL::InputObjectType.define do
    name 'AttachmentInput'

    argument :name, types.String
    argument :attached_file, ApolloUploadServer::Upload
    argument :description, types.String
  end
