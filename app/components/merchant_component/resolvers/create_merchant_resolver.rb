module MerchantComponent
  module Resolvers
    class CreateMerchantResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        MerchantComponent::Organizers::CreateMerchant
      end

      def on_success_return(result)
        { merchant: result.merchant }
      end
    end
  end
end
