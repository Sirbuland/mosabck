module AppSettingsComponent
  module Interactors
    class ListSettings
      include Interactor

      def call
        args = context.args
        name = args[:name]

        app_settings = if name.present?
                         [AppSetting.find_by_name(name)]
                       else
                         AppSetting.all
                       end
        context.app_settings = app_settings
      end
    end
  end
end
