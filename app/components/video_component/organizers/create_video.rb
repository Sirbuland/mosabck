module VideoComponent
  module Organizers
    class CreateVideo
      include Interactor::Organizer

      organize VideoComponent::Interactors::ExtractAttributes,
               VideoComponent::Interactors::SaveVideo
    end
  end
end
