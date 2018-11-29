module ExchangeComponent
  module Organizers
    class CreateExchange
      include Interactor::Organizer

      organize ExchangeComponent::Interactors::ExtractAttributes,
               ExchangeComponent::Interactors::SaveDashboard
    end
  end
end
