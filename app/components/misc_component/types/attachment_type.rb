MiscComponent::Types::AttachmentType = GraphQL::ObjectType.define do
  name 'Attachment'

  field :id, !types.ID
  field :name, types.String
  field :attacedFileUrl, types.String, property: :attached_file_url
  field :description, types.String

end
