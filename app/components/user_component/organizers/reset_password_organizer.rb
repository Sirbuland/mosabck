module UserComponent
  module Organizers
    class ResetPasswordOrganizer
      include Interactor::Organizer

      organize UserComponent::Interactors::GetUserIdFromPhone,
               UserComponent::Interactors::GetUserIdFromEmail,
               UserComponent::Interactors::GetUserFromQuery,
               UserComponent::Interactors::ResetPassword
    end
  end
end
