module NewsFilterComponent
  module Interactors
    class LoadNewsFilter
      include Interactor

      def call
        news_filter = NewsFilter.find_by_id(context.args[:id])
        if news_filter.present?
          context.news_filter = news_filter
        else
          msg = I18n.t('errors.messages.not_found', entity: 'NewsFilter')
          context.fail!(message: msg)
        end
      end
    end
  end
end
