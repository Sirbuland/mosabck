module PanelComponent
  module Interactors
    class ExtractAttributes
      include Interactor

      PANEL_SCHEME = {
        id:          :id,
        name:        :name,
        description: :description,
        start_date:  :start_date,
        end_date:    :end_date,
      }.freeze

      def call
        args = context.args
        puts args

        attributes        = extract_attributes(PANEL_SCHEME, args)
        #attributes[:user] = context.ctx[:current_user]
        dashboard = Dashboard.find(id: attributes[:id])
        attributes[:dashboard] = dashboard

        puts "attributes"
        puts attributes

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
