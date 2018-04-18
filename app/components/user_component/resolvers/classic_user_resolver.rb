module UserComponent
  module Resolvers
    class ClassicUserResolver
      # TODO: refactor me on user create refactor
      def call(_obj, args = ApplicationHelper.h_and_sym(args), ctx)
        result = UserComponent::Interactors::CreateClassicUser.call(args: args)
        if result.failure?
          ctx.add_error(GraphqlHelper.execution_error(result.message))
        else
          { user: result.user, jwt: result.jwt }
        end
      end
    end
  end
end
