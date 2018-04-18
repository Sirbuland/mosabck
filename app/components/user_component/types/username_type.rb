UserComponent::Types::UsernameType = GraphQL::ObjectType.define do
  name 'UsernameType'
  description 'Username availability and suggestions'

  field :available do
    type types.Boolean
    resolve ->(obj, _args, _ctx) { obj[:available] }
  end

  field :suggestions do
    type types[types.String]
    resolve ->(obj, _args, _ctx) { obj[:suggestions] }
  end
end
