module PanelComponent
  module Organizers
    class CreatePanel
      include Interactor::Organizer

      organize PanelComponent::Interactors::ExtractAttributes,
               PanelComponent::Interactors::SavePanel
    end
  end
end
