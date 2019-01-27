module NewsFilterComponent
  module Organizers
    class UpdateNewsFilter
      include Interactor::Organizer

      organize NewsFilterComponent::Interactors::LoadNewsFilter,
               NewsFilterComponent::Interactors::ExtractAttributes,
               NewsFilterComponent::Interactors::SaveNewsFilter
    end
  end
end
