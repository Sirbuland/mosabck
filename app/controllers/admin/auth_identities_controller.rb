module Admin
  class AuthIdentitiesController < Admin::ApplicationController
    def index
      search_term = params[:search].to_s.strip
      page_param = params[:page]
      resources = if search_term.present?
                    ids = AuthIdentity.search(search_term).results.pluck(:id)
                    AuthIdentity.where(id: ids).page(page_param).per(10)
                  else
                    AuthIdentity.page(page_param).per(10)
                  end
      page = Administrate::Page::Collection.new(dashboard, order: order)

      render locals: {
        resources: resources,
        search_term: search_term,
        page: page,
        show_search_bar: show_search_bar?
      }
    end
  end
end
