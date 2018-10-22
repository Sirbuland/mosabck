module ScreenerComponent
  module Organizers
    class CreateScreener
      include Interactor::Organizer

      organize ScreenerComponent::Interactors::ExtractAttributes,
               ScreenerComponent::Interactors::SaveScreener
    end
  end
end
