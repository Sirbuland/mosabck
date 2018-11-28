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

      def call
        args = context.args

        attributes        = extract_attributes(DASHBOARD_SCHEME, args)
        attributes[:user] = context.ctx[:current_user]

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
