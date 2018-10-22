module ScreenerComponent
  module Organizers
    class UpdateScreener
      include Interactor::Organizer

      organize ScreenerComponent::Interactors::LoadScreener,
               ScreenerComponent::Interactors::ExtractAttributes,
               ScreenerComponent::Interactors::SaveScreener
    end
  end
end
