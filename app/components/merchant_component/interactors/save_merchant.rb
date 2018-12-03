module MerchantComponent
  module Interactors
    class SaveMerchant
      include Interactor

      def call
        merchant = context.merchant || Merchant.new
        merchant.update!(context.attributes)
        context.merchant = merchant
      end
    end
  end
end
