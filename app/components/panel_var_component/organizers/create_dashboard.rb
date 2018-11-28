module DashboardComponent
  module Organizers
    class CreateDashboard
      include Interactor::Organizer

      organize DashboardComponent::Interactors::ExtractAttributes,
               DashboardComponent::Interactors::SaveDashboard
    end
  end
end
