module ScreenerComponent
  module Interactors
    class LoadScreener
      include Interactor

      def call
        screener = Screener.find_by_id(context.args[:id])
        if screener.present?
          context.screener = screener
        else
          msg = I18n.t('errors.messages.not_found', entity: 'Screener')
          context.fail!(message: msg)
        end
      end
    end
  end
end
