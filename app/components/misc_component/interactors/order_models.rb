module MiscComponent
  module Interactors
    class OrderModels
      include Interactor

      def call
        models = context.models
        if models.present?
          order = context.order_by
          if order.present?
            context.models = models.map do |model|
              model.order(order)
            end
          end
        else
          msg = I18n.t('errors.messages.no_types_are_present')
          context.fail!(message: msg)
        end
      end
    end
  end
end
