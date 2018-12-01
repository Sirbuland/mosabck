module VideoComponent
  module Interactors
    class LoadVideos
      include Interactor

      def call
        args = context.args
        videos_query = Video.all

        current_user = context.ctx[:current_user]
        if current_user.present?
          videos_query = videos_query.where(user_id: current_user.id)
        end

        ids = args[:ids]
        videos_query = videos_query.where(id: ids) if ids.present?

        context.videos = videos_query
      end
    end
  end
end
