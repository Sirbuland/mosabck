module ScreenerComponent
  module Interactors
    class SaveScreener
      include Interactor

      def call
        screener = context.screener || Screener.new
        screener.update!(context.attributes)
        context.screener = screener
      end
    end
  end
end
