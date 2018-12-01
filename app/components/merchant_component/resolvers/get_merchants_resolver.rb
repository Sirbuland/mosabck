module MerchantComponent
  module Resolvers
    class GetMerchantsResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        MerchantComponent::Interactors::LoadMerchants
      end

      def on_success_return(result)
        result.merchants
      end
    end
  end
end
