module KeywordComponent
  module Organizers
    class CreateKeyword
      include Interactor::Organizer

      organize KeywordComponent::Interactors::ExtractAttributes,
               KeywordComponent::Interactors::SaveKeyword
    end
  end
end
