module ScreenerComponent
  module Organizers
    class DeleteScreener
      include Interactor::Organizer

      organize ScreenerComponent::Interactors::LoadScreener,
               ScreenerComponent::Interactors::DeleteScreener
    end
  end
end
