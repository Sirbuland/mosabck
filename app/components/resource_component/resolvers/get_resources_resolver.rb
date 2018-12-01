module ResourceComponent
  module Resolvers
    class GetResourcesResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        ResourceComponent::Interactors::LoadResources
      end

      def on_success_return(result)
        result.resources
      end
    end
  end
end
