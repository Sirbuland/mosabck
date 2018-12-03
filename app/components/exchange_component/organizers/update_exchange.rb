module ExchangeComponent
  module Organizers
    class UpdateExchange
      include Interactor::Organizer

      organize ExchangeComponent::Interactors::LoadExchange,
      				 ExchangeComponent::Interactors::ExtractAttributes,
               ExchangeComponent::Interactors::SaveExchange

    end
  end
end
