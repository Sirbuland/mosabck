module GeoComponent
  module Interactors
    class GetLocationFromQuery
      include Interactor
      def call
        geo = context.args[:geoMeta]
        return unless geo.present?

        location = Location.new
        %i[country countryCode city street
           streetNumber zip timeZone].each do |field|
          location.public_send("#{field}=", geo[field])
        end
        location.lonlat = "POINT(#{geo[:longitude]} #{geo[:latitude]})"
        context.location = location
      end
    end
  end
end
