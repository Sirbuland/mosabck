module UserComponent
  module Resolvers
    class OauthUserResolver
      # TODO: refactor me on user create refactor
      def call(_obj, args = ApplicationHelper.h_and_sym(args), ctx)
        result = UserComponent::Interactors::CreateOauthUser.call(args: args)
        if result.failure?
          ctx.add_error(GraphqlHelper.execution_error(result.message))
        else
          { user: result.user, jwt: result.jwt }
        end
      end
    end
  end
end
