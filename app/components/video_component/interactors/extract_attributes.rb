module VideoComponent
  module Interactors
    class ExtractAttributes
      include Interactor

      VIDEO_SCHEME = {
        title: :title,
        videoType: :video_type,
        timestamp: :timestamp,
        description: :description,
        sourceUrl: :source_url,
      }.freeze

      def call
        args = context.args

        attributes        = extract_attributes(VIDEO_SCHEME, args)
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
