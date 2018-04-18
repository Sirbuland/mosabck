module UserComponent
  module Resolvers
    class UpdateUserInstallationResolver
      def call(_obj, args = ApplicationHelper.h_and_sym(args), ctx)
        result =
          UserComponent::Interactors::UpdateUserInstallation.call(args: args)
        if result.failure?
          ctx.add_error(GraphqlHelper.execution_error(result.message))
        else
          { user: result.user }
        end
      end
    end
  end
end
