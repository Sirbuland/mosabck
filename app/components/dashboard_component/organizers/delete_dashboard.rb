module DashboardComponent
  module Organizers
    class DeleteDashboard
      include Interactor::Organizer

      organize DashboardComponent::Interactors::LoadDashboard,
               DashboardComponent::Interactors::DeleteDashboard
    end
  end
end
