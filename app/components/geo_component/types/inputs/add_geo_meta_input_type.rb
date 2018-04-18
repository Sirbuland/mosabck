GeoComponent::Types::Inputs::AddGeoMetaInputType =
  GraphQL::InputObjectType.define do
    name 'AddGeoMetaInputType'
    description 'Properties for adding geo meta'

    argument :latitude, types.Float do
      description 'Latitude of location'
    end

    argument :longitude, types.Float do
      description 'Longitude of location'
    end

    %i[country
       countryCode
       city street
       streetNumber
       zip
       timeZone].each do |attr|
      argument attr, types.String do
        description "#{attr.to_s.titleize} of location"
      end
    end
  end
