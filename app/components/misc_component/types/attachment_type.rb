MiscComponent::Types::AttachmentType = GraphQL::ObjectType.define do
  name 'Attachment'

  field :id, !types.ID
  field :name, types.String
  field :attacedFileUrl, types.String, property: :attached_file_url
  field :description, types.String
  field :attacedFileThumbUrl do
    type types.String
    resolve ->(attachment, _args, _ctx) { attachment.attached_file.cover.url }
  end
  
  field :contentType do
    type types.String
    resolve ->(attachment, _args, _ctx) { attachment.attached_file.content_type }
  end

end
