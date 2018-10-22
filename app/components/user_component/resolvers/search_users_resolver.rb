module UserComponent
  module Resolvers
    class SearchUsersResolver
      def call(_obj, args, _ctx)
        search_term = args[:searchTerm]
        search_by = args[:searchBy].presence || ['displayName']
        order_by = args[:orderBy]

        users_query = User.all
        if search_term.present? && search_by.present?
          fields_hash = GraphqlHelper::USER_SEARCH_BY.invert
          search_by.each do |searh_by_field|
            field = fields_hash[searh_by_field]
            users_query =
              users_query.where("#{field} ilike ?", "%#{search_term}%")
          end
        end

        users_query = users_query.order(:username) if order_by.present?
        users_query
      end
    end
  end
end
