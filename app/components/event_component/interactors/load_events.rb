module EventComponent
  module Interactors
    class LoadEvents
      include Interactor

      def call
        args = context.args
        events_query = Event.all

        current_user = context.ctx[:current_user]
        if current_user.present?
          events_query = events_query.where(user_id: current_user.id)
        end

        ids = args[:ids]
        events_query = events_query.where(id: ids) if ids.present?

        context.events = events_query
      end
    end
  end
end
