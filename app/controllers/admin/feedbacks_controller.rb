module Admin
  class FeedbacksController < Admin::ApplicationController
    def index
      search_term = params[:search].to_s.strip
      resources = Administrate::Search.new(scoped_resource,
                                           dashboard_class,
                                           search_term).run
      resources = apply_resource_includes(resources)
      resources = order.apply(resources)
      resources = resources.page(params[:page]).per(records_per_page)
      page = Administrate::Page::Collection.new(dashboard, order: order)

      render locals: {
        resources: resources,
        search_term: search_term,
        page: page,
        show_search_bar: show_search_bar?
      }
    end

    def download
      result =
        UserComponent::Interactors::SendFeedback::CreateFeedbackFile.call
      if result.success?
        send_file result.file.path
      else
        redirect_to admin_feedbacks_path, notice: "Can't process action"
      end
    end

    private

    def apply_resource_includes(relation)
      resource_includes = dashboard.association_includes
      return relation if resource_includes.empty?
      relation.includes(*resource_includes)
    end

    def order
      resource_params = params.fetch(resource_name, {})
      @order ||= Administrate::Order.new(
        resource_params.fetch(:order, :created_at),
        resource_params.fetch(:direction, :desc)
      )
    end
  end
end
