module VideoComponent
  module Resolvers
    class CreateVideoResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        VideoComponent::Organizers::CreateVideo
      end

      def on_success_return(result)
        { video: result.video }
      end
    end
  end
end
