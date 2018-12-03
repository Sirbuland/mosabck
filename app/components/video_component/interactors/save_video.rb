module VideoComponent
  module Interactors
    class SaveVideo
      include Interactor

      def call
        video = context.video || Video.new
        video.update!(context.attributes)
        context.video = video
      end
    end
  end
end
