module ResearchComponent
  module Interactors
    class ExtractAttributes
      include Interactor

      RESEARCH_SCHEME = {
        researchType: :research_type,
        sourceUrl: :source_url,
        title: :title,
        description: :description,
        dateAuthored: :date_authored,
        reference: :reference,
        filePath: :file_path
      }.freeze

      def call
        args = context.args

        attributes        = extract_attributes(RESEARCH_SCHEME, args)
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
