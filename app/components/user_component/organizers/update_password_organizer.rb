module UserComponent
  module Organizers
    class UpdatePasswordOrganizer
      include Interactor::Organizer

      organize UserComponent::Interactors::GetUserIdFromPinNumberAndPhone,
               UserComponent::Interactors::GetUserIdFromPinNumberAndEmail,
               UserComponent::Interactors::GetUserFromQuery,
               UserComponent::Interactors::PasswordUpdate
    end
  end
end
