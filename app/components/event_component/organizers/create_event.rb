module EventComponent
  module Organizers
    class CreateEvent
      include Interactor::Organizer

      organize EventComponent::Interactors::ExtractAttributes,
               EventComponent::Interactors::SaveEvent
    end
  end
end
