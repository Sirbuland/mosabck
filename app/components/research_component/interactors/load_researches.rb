module ResearchComponent
  module Interactors
    class LoadResearches
      include Interactor

      def call
        args = context.args
        researches_query = Research.all

        current_user = context.ctx[:current_user]
        if current_user.present?
          researches_query = researches_query.where(user_id: current_user.id)
        end

        ids = args[:ids]
        researches_query = researches_query.where(id: ids) if ids.present?

        context.researches = researches_query
      end
    end
  end
end
