module ResearchComponent
  module Organizers
    class UpdateResearch
      include Interactor::Organizer

      organize ResearchComponent::Interactors::LoadResearch,
               ResearchComponent::Interactors::ExtractAttributes,
               ResearchComponent::Interactors::SaveResearch
    end
  end
end
