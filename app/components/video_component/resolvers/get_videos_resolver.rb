module VideoComponent
  module Resolvers
    class GetVideosResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        VideoComponent::Interactors::LoadVideos
      end

      def on_success_return(result)
        result.videos
      end
    end
  end
end
