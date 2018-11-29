module ExchangeComponent
  module Interactors
    class ExtractAttributes
      include Interactor

      EXCHANGE_SCHEME = {
        exchange: :exchange,
        vetted:  :vetted
      }.freeze

      PANEL_SCHEME = {
        id:          :id,
        name:        :name,
        description: :description,
        slug:        :slug,
        start_date:  :start_date,
        end_date:    :end_date
      }.freeze

      def call
        args = context.args

        attributes        = extract_attributes(EXCHANGE_SCHEME, args)
        attributes[:user] = context.ctx[:current_user]

        # panels = args[:panels]
        # if panels
        #   attributes[:panels] = panels.map do |panel_args|
        #     extract_attributes(PANEL_SCHEME, panel_args)
        #   end
        # end

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
