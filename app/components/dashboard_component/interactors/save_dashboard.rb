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

        panels.each do |panel_i, panel_attributes|
          # get panel_vars attributes
          panel_vars = panel_attributes.delete(:panel_vars)

          # set panel dashboard
          panel_attributes[:dashboard] = dashboard

          # create panel
          panel = context.panel || Panel.new
          panel.update!(panel_attributes)

          panel_vars.each do |panel_var_i, panel_var_attributes|
            # create var
            var = context.var || Var.new
            var.update!(panel_var_attributes)

            # create panel var relating panel and the created var
            panel_var = context.panel_var || PanelVar.new
            panel_var.update!(panel: panel, var: var)
          end

        end

        context.dashboard = dashboard
      end
    end
  end
end
