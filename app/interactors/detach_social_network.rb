class DetachSocialNetwork
  include Interactor::Organizer

  organize UserComponent::Interactors::GetUserFromQuery,
           IdentitiesComponent::Interactors::DeactivateAuthIdentities
end
