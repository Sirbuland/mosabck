module DashboardComponent
  module Resolvers
    class DeleteDashboardResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        DashboardComponent::Organizers::DeleteDashboard
      end

      def on_success_return(result)
        { dashboard: result.dashboard }
      end
    end
  end
end
