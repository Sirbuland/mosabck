module UserComponent
  module Resolvers
    class SearchUsersResolver
      def call(_obj, args, _ctx)
        search_term = args[:searchTerm]
        order_by = args[:orderBy]

        if search_term.present?
          search_by = []
          fields = args[:searchBy]
          if fields.present?
            fields.each do |current|
              search_field =
                GraphqlHelper::USER_SEARCH_BY_TRANSLATIONS[current.to_sym]
              search_by.push(search_field)
            end
          else
            search_by = [:username, :email]
          end
          term_search(search_term, search_by)
        else
          order_by.present? ? User.all.order(:username) : User.all
        end
      end

      private

      def term_search(search_term, search_by)
        if ENV.fetch('SEARCH_ENGINE') { 'solr' } == 'solr'
          User.solr_search(search_term, search_by)
        else
          User.search(search_term,
            fields: search_by, match: :word_middle).results
        end
      end
    end
  end
end
