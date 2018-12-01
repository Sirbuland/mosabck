module MerchantComponent
  module Interactors
    class LoadMerchants
      include Interactor

      def call
        args = context.args
        merchants_query = Merchant.all

        current_user = context.ctx[:current_user]
        if current_user.present?
          merchants_query = merchants_query.where(user_id: current_user.id)
        end

        ids = args[:ids]
        merchants_query = merchants_query.where(id: ids) if ids.present?

        context.merchants = merchants_query
      end
    end
  end
end
