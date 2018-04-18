module GeoComponent
  module Organizers
    class AllGeoTaggable
      include Interactor::Organizer

      organize GeoComponent::Interactors::FetchGeoTaggableModels,
               MiscComponent::Interactors::OrderModels,
               MiscComponent::Interactors::MergeModels
    end
  end
end
