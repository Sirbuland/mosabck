module ScreenerComponent
  module Interactors
    class DeleteScreener
      include Interactor

      def call
        context.screener.destroy!
      end
    end
  end
end
