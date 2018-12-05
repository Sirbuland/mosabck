module PersonComponent
  module Organizers
    class CreatePerson
      include Interactor::Organizer

      organize PersonComponent::Interactors::ExtractAttributes,
               PersonComponent::Interactors::SavePerson
    end
  end
end
