module ResearchComponent
  module Organizers
    class CreateResearch
      include Interactor::Organizer

      organize ResearchComponent::Interactors::ExtractAttributes,
               ResearchComponent::Interactors::SaveResearch
    end
  end
end
