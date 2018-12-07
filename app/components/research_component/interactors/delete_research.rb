module ResearchComponent
  module Interactors
    class DeleteResearch
      include Interactor

      def call
        context.research.destroy!
      end
    end
  end
end
