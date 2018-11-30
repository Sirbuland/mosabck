module DashboardComponent
  module Resolvers
    class GetDashboardsResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        DashboardComponent::Interactors::LoadDashboards
      end

      def on_success_return(result)
        result.dashboards
      end
    end
  end
end
