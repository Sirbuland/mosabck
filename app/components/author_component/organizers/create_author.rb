module AuthorComponent
  module Organizers
    class CreateAuthor
      include Interactor::Organizer

      organize AuthorComponent::Interactors::ExtractAttributes,
               AuthorComponent::Interactors::SaveAuthor
    end
  end
end
