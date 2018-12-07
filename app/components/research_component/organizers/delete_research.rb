module ResearchComponent
  module Organizers
    class DeleteResearch
      include Interactor::Organizer

      organize ResearchComponent::Interactors::LoadResearch,
               ResearchComponent::Interactors::DeleteResearch
    end
  end
end
