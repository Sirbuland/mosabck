UserComponent::Connections::UserConnectionWithTotalCountType =
  UserComponent::Types::UserType.define_connection do
    name 'UserConnectionWithTotalCountType'
    field :totalCount do
      type types.Int
      resolve ->(conn, _args, _ctx) { conn.nodes.count }
    end
  end
