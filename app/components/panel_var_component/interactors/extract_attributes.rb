module DashboardComponent
  module Interactors
    class ExtractAttributes
      include Interactor

      DASHBOARD_SCHEME = {
        uid: :uid,
        title: :title,
        uri: :uri,
        url: :url
      }.freeze

      # DASHBOARD_FILTER_SCHEME = {
      #   name: :name,
      #   operator: :operator,
      #   category: :category,
      #   value: :value
      # }.freeze

      def call
        args = context.args
        puts args

        attributes        = extract_attributes(DASHBOARD_SCHEME, args)
        attributes[:user] = context.ctx[:current_user]

        puts "attributes"
        puts attributes

        # filters = args[:filters]
        # if filters
        #   attributes[:filters] = filters.map do |filter_args|
        #     extract_attributes(DASHBOARD_FILTER_SCHEME, filter_args)
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
