module DashboardComponent
  module Interactors
    class DeleteDashboard
      include Interactor

      def call
        context.dashboard.destroy!
      end
    end
  end
end
