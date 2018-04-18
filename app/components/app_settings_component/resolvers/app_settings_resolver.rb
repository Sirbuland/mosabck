module AppSettingsComponent
  module Resolvers
    class AppSettingsResolver
      def call(_obj, args = ApplicationHelper.h_and_sym(args), ctx)
        result =
          AppSettingsComponent::Interactors::ListSettings.call(args: args)
        if result.failure?
          ctx.add_error(GraphqlHelper.execution_error(result.message))
        else
          result.app_settings
        end
      end
    end
  end
end
