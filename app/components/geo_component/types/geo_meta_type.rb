GeoComponent::Types::GeoMetaType = GraphQL::ObjectType.define do
  name 'GeoMeta'

  field :id, !types.ID
  field :latitude do
    type !types.Float
    resolve ->(obj, _args, _ctx) {
      obj.lonlat.y
    }
  end
  field :longitude do
    type !types.Float
    resolve ->(obj, _args, _ctx) {
      obj.lonlat.x
    }
  end
  field :country, types.String
  field :countryCode, types.String
  field :city, types.String
  field :street, types.String
  field :streetNumber, types.String
  field :zip, types.String
  field :timeZone, types.String
end
