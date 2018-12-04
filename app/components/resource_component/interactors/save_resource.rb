module ResourceComponent
  module Interactors
    class SaveResource
      include Interactor

      def call
        resource = context.resource || Resource.new
        resource.update!(context.attributes)
        context.resource = resource
      end
    end
  end
end
