module GeoComponent
  module Resolvers
    class AllGeoTaggableResolver
      def call(_obj, args, _ctx)
        order_by = args['orderBy']
        types = args['filterTypes']
        bounds = {
          x_min: args['xMin'] || -180,
          x_max: args['xMax'] || 180,
          y_min: args['yMin'] || -180,
          y_max: args['yMax'] || 180
        }
        result = GeoComponent::Organizers::AllGeoTaggable.call(
          order_by: order_by,
          types: types,
          bounds: bounds
        )
        if result.failure?
          ctx.add_error(GraphqlHelper.execution_error(result.message))
        else
          result.models
        end
      end
    end
  end
end
