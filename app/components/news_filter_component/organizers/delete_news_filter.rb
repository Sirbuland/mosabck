module NewsFilterComponent
  module Organizers
    class DeleteNewsFilter
      include Interactor::Organizer

      organize NewsFilterComponent::Interactors::LoadNewsFilter,
               NewsFilterComponent::Interactors::DeleteNewsFilter
    end
  end
end
