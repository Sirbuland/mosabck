module ResearchComponent
  module Interactors
    class ExtractAttributes
      include Interactor

      ATTACHED_MODEL_SCHEMES = {
        authors: {
          id: :id,
          name: :name,
          description: :description,
          profession: :profession,
          username: :username
        }, 
        keywords: {
          id: :id,
          name: :name,
          description: :description
        }, 
        secondary_crypto_assets: {
          id: :id,
          name: :name,
          attribute1: :attribute1,
          attribute2: :attribute2
        }, 
        votes_for: {
          voterId: :voter_id,
          votableId: :votable_id,
          voterType: :voter_type
        },
        attachments: {
          id: :id,
          name: :name,
          attached_file: :attached_file,
          description: :description
        }
      }

      RESEARCH_SCHEME = {
        researchType: :research_type,
        sourceUrl: :source_url,
        title: :title,
        description: :description,
        dateAuthored: :date_authored,
        reference: :reference,
        filePath: :file_path,
        rating: :rating,
        attachment: :attachment
      }.freeze

      def call
        args = context.args

        attributes        = extract_attributes( RESEARCH_SCHEME, args )
        attributes[:user] = context.ctx[:current_user]

        # extract attached model attributes
        ATTACHED_MODEL_SCHEMES.each do | model_name, model_scheme |
          attached_model_attributes(
            args[:"#{model_name.to_s.camelize(:lower)}"],
            attributes,
            model_name,
            model_scheme
          )
        end

        context.attributes = attributes
      end

      private

      def attached_model_attributes( model_attributes, parent_attributes, model_name, model_scheme )
        if model_attributes
          parent_attributes[:"#{model_name}"] = {}

          model_attributes.each_with_index do | model_args, model_i |
            parent_attributes[:"#{model_name}"][model_i] = extract_attributes(model_scheme, model_args)
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
