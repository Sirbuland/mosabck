module PanelComponent
  module Interactors
    class SavePanel
      include Interactor

      def call
        panel = context.panel || Panel.new
        panel.update!(context.attributes)
        context.panel = panel
      end
    end
  end
end
