module ScreenerComponent
  module Interactors
    class LoadScreeners
      include Interactor

      def call
        args = context.args
        screeners_query = Screener.all

        current_user = context.ctx[:current_user]
        if current_user.present?
          screeners_query = screeners_query.where(user_id: current_user.id)
        end

        ids = args[:ids]
        screeners_query = screeners_query.where(id: ids) if ids.present?

        context.screeners = screeners_query
      end
    end
  end
end
