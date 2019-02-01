module ResearchComponent
  module Resolvers
    class SearchResearchesResolver
      def call(_obj, args, _ctx)
        search_term = args[:searchTerm]
        search_by = args[:searchBy].presence || ['researchType']
        order_by = args[:orderBy].gsub('_DESC', '').gsub('_ASC', '') if args[:orderBy]
        page = args[:page] 
        per_page = args[:perPage] 

        research_query = Research.published
        if search_term.present? && search_by.present?
          fields_hash = GraphqlHelper::RESEARCH_SEARCH_BY.invert
          search_by.each do |searh_by_field|
            field = fields_hash[searh_by_field]
            research_query =
              research_query.where("#{field} ilike ?", "%#{search_term}%")
          end
        end
        research_query = research_query.order_researches(order_by.underscore) if order_by.present?
        research_query = research_query.paginate(page: page,per_page: per_page) if page and per_page
        research_query
      end
    end
  end
end
