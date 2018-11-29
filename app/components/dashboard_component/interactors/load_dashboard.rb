module DashboardComponent
  module Interactors
    class LoadDashboard
      include Interactor

      def call
        dashboard = Dashboard.find_by_id(context.args[:id])
        if dashboard.present?
          context.dashboard = dashboard
        else
          msg = I18n.t('errors.messages.not_found', entity: 'Dashboard')
          context.fail!(message: msg)
        end
      end
    end
  end
end
