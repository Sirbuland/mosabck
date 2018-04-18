module Solr
  module UserSearchable
    extend ActiveSupport::Concern

    included do
      searchable do
        text :username_and_email do
          username_and_email
        end
        text :first_name
        text :last_name
      end

      def username_and_email
        "#{username} #{email}"
      end

      def self.solr_search(term, _search_by = nil)
        User.search { fulltext "*#{term.downcase}*" }.results
      end
    end
  end
end
