module Solr
  module PostSearchable
    extend ActiveSupport::Concern

    included do
      searchable do
        text :title do
          payload['title'] || ''
        end
        text :body do
          payload['body'] || ''
        end
        text :comments do
          comment_threads.map { |comment| "#{comment.title} #{comment.body}" }
        end
        text :tags do
          tag_list
        end
      end

      def self.solr_search(term, _search_by = nil)
        Post.search { fulltext term }.results
      end
    end
  end
end
