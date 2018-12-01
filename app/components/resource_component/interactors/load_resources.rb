module ResourceComponent
  module Interactors
    class LoadResources
      include Interactor

      def call
        args = context.args
        resources_query = Resource.all

        current_user = context.ctx[:current_user]
        if current_user.present?
          resources_query = resources_query.where(user_id: current_user.id)
        end

        ids = args[:ids]
        resources_query = resources_query.where(id: ids) if ids.present?

        context.resources = resources_query
      end
    end
  end
end
