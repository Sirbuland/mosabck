class AttachSocialNetwork
  include Interactor::Organizer

  organize UserComponent::Interactors::GetUserFromQuery,
           IdentitiesComponent::Interactors::DeactivateAuthIdentities,
           UserComponent::Interactors::UpdateUserAccounts
end
