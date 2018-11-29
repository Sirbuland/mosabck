module DashboardComponent
  module Interactors
    class SaveDashboard
      include Interactor

      def call
        # get panels attributes
        panels = context.attributes.delete(:panels)

        # create dashboard
        dashboard = context.dashboard || Dashboard.new
        dashboard.update!(context.attributes)

        # create each panel
        panels.each do |panel_i, panel_attributes|
          # get panel_vars attributes
          panel_vars = panel_attributes.delete(:panel_vars)

          # set panel dashboard
          panel_attributes[:dashboard] = dashboard

          # create panel if it doesn't exist
          panel = dashboard.panels[panel_i] || Panel.new
          panel.update!(panel_attributes)

          # create each panel var
          panel_vars.each do |panel_var_i, panel_var_attributes|

            # create var if it doesn't exist
            var = Var.where(panel_var_attributes).first || Var.new(panel_var_attributes)

            # create panel var relating panel and the created var
            panel_var = panel.panel_vars.where(panel: panel, var: var).first || PanelVar.new
            panel_var.update!(panel: panel, var: var)
          end
        end

        context.dashboard = dashboard
      end
    end
  end
end
