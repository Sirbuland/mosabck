module NewsFilterComponent
  module Organizers
    class CreateNewsFilter
      include Interactor::Organizer

      organize NewsFilterComponent::Interactors::ExtractAttributes,
               NewsFilterComponent::Interactors::SaveNewsFilter
    end
  end
end
