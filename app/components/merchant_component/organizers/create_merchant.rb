module MerchantComponent
  module Organizers
    class CreateMerchant
      include Interactor::Organizer

      organize MerchantComponent::Interactors::ExtractAttributes,
               MerchantComponent::Interactors::SaveMerchant
    end
  end
end
