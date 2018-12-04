module AuthorComponent
  module Interactors
    class SaveAuthor
      include Interactor

      def call
        author = context.author || Author.new
        author.update!(context.attributes)
        context.author = author
      end
    end
  end
end
