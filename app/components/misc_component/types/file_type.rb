MiscComponent::Types::FileType = GraphQL::ScalarType.define do
  name 'File'
  description "action_dispatch_uploaded_file"
  coerce_input ->(action_dispatch_uploaded_file, ctx) {
		action_dispatch_uploaded_file
  }
end
