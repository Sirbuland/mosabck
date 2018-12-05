module CryptoAssetComponent
  module Organizers
    class CreateCryptoAsset
      include Interactor::Organizer

      organize CryptoAssetComponent::Interactors::ExtractAttributes,
               CryptoAssetComponent::Interactors::SaveCryptoAsset
    end
  end
end
