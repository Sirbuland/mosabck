module DashboardComponent
  module Resolvers
    class UpdateDashboardResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        DashboardComponent::Organizers::UpdateDashboard
      end

      def on_success_return(result)
        { dashboard: result.dashboard }
      end
    end
  end
end
