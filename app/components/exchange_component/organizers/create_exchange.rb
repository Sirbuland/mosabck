module ExchangeComponent
  module Organizers
    class CreateExchange
      include Interactor::Organizer

      organize ExchangeComponent::Interactors::ExtractAttributes,
               ExchangeComponent::Interactors::SaveExchange
    end
  end
end
