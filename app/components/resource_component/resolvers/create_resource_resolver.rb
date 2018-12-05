module ResourceComponent
  module Resolvers
    class CreateResourceResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        ResourceComponent::Organizers::CreateResource
      end

      def on_success_return(result)
        { resource: result.resource }
      end
    end
  end
end
