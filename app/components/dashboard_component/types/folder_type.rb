DashboardComponent::Types::FolderType = GraphQL::ObjectType.define do
	name 'folder'

	field :id, !types.ID
	field :uid, types.String
	field :title, types.String
	
end