GeoComponent::Types::GeoTaggableType = GraphQL::InterfaceType.define do
  name 'GeoTaggable'

  field :id, !types.ID

  field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(obj, _args, _ctx) { obj.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(obj, _args, _ctx) { obj.created_at }
  end

  field :geoMeta do
    type GeoComponent::Types::GeoMetaType
    resolve ->(obj, _args, _ctx) { obj.location }
  end

  resolve_type ->(value, _ctx) {
    class_name =
      value.is_a?(Post) ? value.post_type.classify : value.class.name
    "#{value.class.name}Component::Types::#{class_name}Type".constantize
  }
end
