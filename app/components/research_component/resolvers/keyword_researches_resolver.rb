module ResearchComponent
  module Resolvers
    class KeywordResearchesResolver
      def call(_obj, args, _ctx)
        
        id = args[:ids] 
        per_page = args[:perPage] 
        
        if per_page == ""
          per_page = "0"
        end
        
        research = Research.find_by_id(id)
        
        if research.present?

          keyword = research.keywords
          array = []
            
          if keyword.present?
           researches = Research.joins(:keywords).where("keywords.name IN (?)", keyword.pluck(:name)).where.not(id: research.id).order('COUNT(keywords.id) DESC').group(:id)
          else 
            researches = Research.where('title LIKE ?', "%#{research.title}%").where.not(id: research.id)
        
          if (!researches.present?)
           researches = Research.where(research_type: research.research_type).where.not(id: research.id)
          end 
        end
        else
          msg = I18n.t('errors.messages.not_found', entity: 'Research')
          context.fail!(message: msg)
        end
        if per_page.present?
          researches.limit(per_page)
        else
         researches
        end
      end
    end
  end   
end
        