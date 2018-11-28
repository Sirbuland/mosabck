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
        id:          :id,
        name:        :name,
        description: :description,
        slug:        :slug,
        start_date:  :start_date,
        end_date:    :end_date
      }.freeze

      # PANEL_VAR_SCHEME = {

      # }.freeze

      def call
        args = context.args

        attributes        = extract_attributes(DASHBOARD_SCHEME, args)
        attributes[:user] = context.ctx[:current_user]

        panels = args[:panels]
        if panels
          attributes[:panels] = panels.map do |panel_args|
            extract_attributes(PANEL_SCHEME, panel_args)
          end
        end

        context.attributes = attributes
      end

      private

      def extract_attributes(scheme, args)
        MiscComponent::Interactors::ExtractAttributes.call(
          scheme: scheme, args: args
        ).attributes
      end
    end
  end
end
