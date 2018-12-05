module WalletComponent
  module Organizers
    class CreateWallet
      include Interactor::Organizer

      organize WalletComponent::Interactors::ExtractAttributes,
               WalletComponent::Interactors::SaveWallet
    end
  end
end
