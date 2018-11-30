require 'pp'

module DashboardComponent
  module Interactors
    class LoadDashboards
      include Interactor

      def call
        args = context.args
        dashboards_query = Dashboard.all

        current_user = context.ctx[:current_user]
        if current_user.present?
          dashboards_query = dashboards_query.where(user_id: current_user.id)
        end

        ids = args[:ids]
        dashboards_query = dashboards_query.where(id: ids) if ids.present?

        context.dashboards = dashboards_query
      end
    end
  end
end
