module DashboardComponent
  module Interactors
    class SaveDashboard
      include Interactor

      def call
        dashboard = context.dashboard || Dashboard.new
        dashboard.update!(context.attributes)
        context.dashboard = dashboard
      end
    end
  end
end
