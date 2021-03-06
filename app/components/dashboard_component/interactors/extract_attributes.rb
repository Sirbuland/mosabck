module DashboardComponent
  module Interactors
    class ExtractAttributes
      include Interactor

      DASHBOARD_SCHEME = {
        uid:   :uid,
        title: :title,
        slug:  :slug
      }.freeze

      PANEL_SCHEME = {
        id:            :id,
        name:          :name,
        description:   :description,
        slug:          :slug,
        graf_dash_uri: :graf_dash_uri,
        graf_panel_id: :graf_panel_id,
        start_date:    :start_date,
        end_date:      :end_date
      }.freeze

      VAR_SCHEME = {
        name:  :name,
        value: :value
      }.freeze

      COIN_SCHEME = {
        text: :text,
        value: :value,
        selected: :selected
      }

      def call
        args = context.args

        # extract dashboard attributes
        attributes        = extract_attributes(DASHBOARD_SCHEME, args)
        attributes[:user] = context.ctx[:current_user]
        panels = args[:panels]
        coins = attributes[:coins]

        if panels
          attributes[:panels] = {}

          # extract each panel attributes
          panels.each_with_index do |panel_args, panel_i|
            attributes[:panels][panel_i] = extract_attributes(PANEL_SCHEME, panel_args)

            panel_vars = panel_args[:panelVars]
            if panel_vars
              attributes[:panels][panel_i][:panel_vars] = {}

              # extract each panel var attributes
              panel_vars.each_with_index do |panel_var_args, panel_var_i|
                attributes[:panels][panel_i][:panel_vars][panel_var_i] = extract_attributes(VAR_SCHEME, panel_var_args)
              end
            end

            panel_coins = panel_args[:grafCoins]

            # extract coin attributes for each panel
            coin_attributes( panel_coins, attributes[:panels][panel_i] )
          end
        end

        coin_attributes( args[:dashboardCoins], attributes)

        context.attributes = attributes
      end

      private

      def coin_attributes( coins, parent_attributes )
        if coins
          parent_attributes[:coins] = {}

          # extract each coin attributes
          coins.each_with_index do |coin_args, coin_i|
            parent_attributes[:coins][coin_i] = extract_attributes( COIN_SCHEME, coin_args )
          end
        end
      end

      def extract_attributes(scheme, args)
        MiscComponent::Interactors::ExtractAttributes.call(
          scheme: scheme, args: args
        ).attributes
      end
    end
  end
end
