module DashboardComponent
  module Resolvers
    class CreateDashboardResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        DashboardComponent::Organizers::CreateDashboard
        #DashboardComponent::Interactors::SaveDashboard
      end

      def on_success_return(result)
        { dashboard: result.dashboard }
      end
    end
  end
end
