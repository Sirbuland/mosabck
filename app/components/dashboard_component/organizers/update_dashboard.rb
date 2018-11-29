module DashboardComponent
  module Organizers
    class UpdateDashboard
      include Interactor::Organizer

      organize DashboardComponent::Interactors::LoadDashboard,
               DashboardComponent::Interactors::ExtractAttributes,
               DashboardComponent::Interactors::SaveDashboard
    end
  end
end
