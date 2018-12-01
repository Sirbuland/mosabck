module AuthorComponent
  module Interactors
    class LoadAuthors
      include Interactor

      def call
        args = context.args
        authors_query = Author.all

        current_user = context.ctx[:current_user]
        if current_user.present?
          authors_query = authors_query.where(user_id: current_user.id)
        end

        ids = args[:ids]
        authors_query = authors_query.where(id: ids) if ids.present?

        context.authors = authors_query
      end
    end
  end
end
