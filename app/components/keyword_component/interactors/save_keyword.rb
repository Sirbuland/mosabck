module KeywordComponent
  module Interactors
    class SaveKeyword
      include Interactor

      def call
        keyword = context.keyword || Keyword.new
        keyword.update!(context.attributes)
        context.keyword = keyword
      end
    end
  end
end
