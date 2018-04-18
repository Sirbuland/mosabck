UserComponent::Types::ViewerType = GraphQL::ObjectType.define do
  name 'Viewer'

  field :currentUser do
    type UserComponent::Types::UserType
    description 'Current user'
    resolve ->(obj, _args, _ctx) { obj }
  end

  field :user do
    type UserComponent::Types::UserType
    description 'User with the provided id'
    argument :id, !types.ID
    resolve UserComponent::Resolvers::UserByIdResolver.new
  end
end
