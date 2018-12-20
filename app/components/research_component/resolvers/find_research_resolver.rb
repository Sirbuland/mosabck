module ResearchComponent
  module Resolvers
    class FindResearchResolver
      def call(_obj, args, _ctx)
        find_by_column = args[:findBy].presence || 'slug'
        find_value = args[:findValue]

        Research.find_by "#{find_by_column}": find_value
      end
    end
  end
end
