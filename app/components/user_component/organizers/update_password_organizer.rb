module UserComponent
  module Organizers
    class UpdatePasswordOrganizer
      include Interactor::Organizer

      organize UserComponent::Interactors::GetUserByPinNumberAndEmail,
               UserComponent::Interactors::PasswordUpdate
    end
  end
end
