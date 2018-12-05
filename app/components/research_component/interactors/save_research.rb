module ResearchComponent
  module Interactors
    class SaveResearch
      include Interactor

      def call
        research = context.research || Research.new
        research.update!(context.attributes)
        context.research = research
      end
    end
  end
end
