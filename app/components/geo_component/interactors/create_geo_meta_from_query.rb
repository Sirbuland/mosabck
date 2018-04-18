module GeoComponent
  module Interactors
    class CreateGeoMetaFromQuery
      include Interactor

      def call
        location = context.location
        return unless location.present?

        if location.valid?
          location.save
        else
          formatted_error = ApplicationHelper.formatted_errors(location)
          context.fail!(message: formatted_error)
        end
      end
    end
  end
end
