module KeywordComponent
  module Interactors
    class LoadKeywords
      include Interactor

      def call
        args = context.args
        keywords_query = Keyword.all

        current_user = context.ctx[:current_user]
        if current_user.present?
          keywords_query = keywords_query.where(user_id: current_user.id)
        end

        ids = args[:ids]
        keywords_query = keywords_query.where(id: ids) if ids.present?

        context.keywords = keywords_query
      end
    end
  end
end
