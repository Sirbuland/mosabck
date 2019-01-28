module NewsFilterComponent
  module Interactors
    class SaveNewsFilter
      include Interactor

      def call
        user = context.attributes.delete(:user)

        news_filter = context.news_filter || NewsFilter.new
        news_filter.assign_attributes(context.attributes)
        news_filter.save!

        assign_to_creator( user, news_filter ) if user
        context.news_filter = news_filter
      end

      private

      # assign news_filter to creator (user)
      def assign_to_creator( user, news_filter )
        user.news_filters << news_filter unless user.news_filters.exists? id: news_filter.id
      end
    end
  end
end
