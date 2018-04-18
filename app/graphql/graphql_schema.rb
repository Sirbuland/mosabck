GraphqlSchema = GraphQL::Schema.define do
  mutation(MutationType)
  query(QueryType)

  resolve_type ->(obj, type, _ctx) {}

  id_from_object ->(object, type, _ctx) do
    GraphQL::Schema::UniqueWithinType.encode(type.name, object.id)
  end
end
