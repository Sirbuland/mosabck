module DashboardComponent
  module Interactors
    class SaveDashboard
      include Interactor

      def call
        # get panels attributes
        panels = context.attributes.delete(:panels)
        coins = context.attributes.delete(:coins)

        # create dashboard
        dashboard = context.dashboard || Dashboard.new
        dashboard.update!(context.attributes)

        # create each panel
        if panels
          
          # delete existing panels
          dashboard.panels.each { |panel| panel.destroy }
          
          panels.each do |panel_i, panel_attributes|
            # get panel_vars attributes
            panel_vars = panel_attributes.delete(:panel_vars)

            # set panel dashboard
            panel_attributes[:dashboard] = dashboard

            # create panel if it doesn't exist
            panel = Panel.new
            panel.update!(panel_attributes)

            if panel_vars
              # create each panel var
              panel_vars.each do |panel_var_i, panel_var_attributes|

                # create var if it doesn't exist
                var = Var.where(name: panel_var_attributes[:name]).first || Var.new
                var.update(panel_var_attributes)

                # create panel var relating panel and the created var
                panel_var = PanelVar.new(panel: panel, var: var).save!
              end
            end
          end
        end

        # create dashboard associated coins
        create_coins( coins, dashboard ) if coins

        context.dashboard = dashboard
      end

      private 

      def create_coins( coins, dashboard )
        # delete existing coins
        dashboard.coins.destroy_all if dashboard.coins.present?

        coins.each do |coin_i, coin_attributes|
          coin_attributes[:dashboard] = dashboard
          coin = Coin.new(coin_attributes)
          coin.save!
        end
      end
    end
  end
end
