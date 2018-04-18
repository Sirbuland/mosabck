module UserComponent
  module Organizers
    class UpdateOrganizer
      include Interactor::Organizer

      organize UserComponent::Interactors::GetUserFromQuery,
               GeoComponent::Interactors::GetLocationFromQuery,
               UserComponent::Interactors::Update,
               UserComponent::Interactors::UpdateAuthIdentities,
               GeoComponent::Interactors::CreateGeoMetaFromQuery
    end
  end
end
