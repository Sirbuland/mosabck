module ResearchComponent
  module Resolvers
    class KeywordResearchesResolver
      def call(_obj, args, _ctx)
        
        id = args[:id] 
        per_page = args[:perPage] 
        
        if per_page == ""
          per_page = "0"
        end
        
        research = Research.find_by_id(id)
        researches = []
        
        if research.present?

          keyword = research.keywords
          array = []

          if keyword.present?
            researches = Research.joins(:keywords).where("keywords.name IN (?)", keyword.pluck(:name)).where.not(id: research.id).order('COUNT(keywords.id) DESC').group(:id)
          end

          researches = Research.order("order_timestamp DESC") if researches.blank?
         
          if per_page.present?
            researches = researches.limit(per_page)
          end
        end
        researches
      end
    end
  end   
end
        