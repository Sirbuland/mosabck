module ResearchComponent
  module Interactors
    class LoadResearch
      include Interactor

      def call
        research = Research.find_by_id(context.args[:id])
        if research.present?
          context.research = research
        else
          msg = I18n.t('errors.messages.not_found', entity: 'Research')
          context.fail!(message: msg)
        end
      end
    end
  end
end
