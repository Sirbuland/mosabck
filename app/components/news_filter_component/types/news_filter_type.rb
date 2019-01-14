NewsFilterComponent::Types::NewsFilterType = GraphQL::ObjectType.define do
  name 'newsFilter'

  field :id, !types.ID
  field :name, types.String
  field :description, types.String

end