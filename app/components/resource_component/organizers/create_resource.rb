module ResourceComponent
  module Organizers
    class CreateResource
      include Interactor::Organizer

      organize ResourceComponent::Interactors::ExtractAttributes,
               ResourceComponent::Interactors::SaveResource
    end
  end
end
