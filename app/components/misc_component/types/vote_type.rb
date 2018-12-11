MiscComponent::Types::VoteType = GraphQL::ObjectType.define do
  name 'Vote'

  field :id, !types.ID
  field :voterId, types.String, property: :voter_id
  field :votableId, types.String, property: :votable_id
  field :voterType, types.String, property: :voter_type

end
