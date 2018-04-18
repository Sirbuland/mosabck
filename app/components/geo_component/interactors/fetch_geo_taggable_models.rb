module GeoComponent
  module Interactors
    class FetchGeoTaggableModels
      include Interactor

      TYPES = {
        text_posts: :text,
        image_posts: :image,
        offer_service_posts: :offer_service,
        all_posts: :all_posts,
        user: :user
      }.freeze
      MODEL_BY_TYPE = {
        post: [:text_posts, :image_posts, :offer_service_posts, :all_posts],
        user: [:user]
      }.freeze

      def call
        models = []
        types = context.types
        filters = GraphqlHelper::GEO_TAGGED_TYPES_FILTER.invert
        types.each do |type|
          match = filters.fetch(type) { nil }
          if match.present?
            models << data(model_from_type(match), match)
          else
            context.fail!(message: I18n.t('errors.messages.unexpected_type'))
          end
        end
        context.models = models.map do |model|
          model.includes(:location).where.not(locations: { id: nil })
               .find_in_rectangle(context.bounds)
        end
      end

      def model_from_type(type)
        MODEL_BY_TYPE.each do |key, array|
          next unless array.include?(type)
          return key
        end
      end

      def data(model, type = nil)
        case model
        when :user
          User.all
        when :post
          if type.present?
            return Post.all if type == :all_posts
            Post.where(post_type: Post::POST_TYPES[TYPES[type]])
          else
            Post.all
          end
        end
      end
    end
  end
end
