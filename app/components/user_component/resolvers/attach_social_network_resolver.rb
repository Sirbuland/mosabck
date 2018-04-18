module UserComponent
  module Resolvers
    class AttachSocialNetworkResolver
      def call(_obj, args, ctx)
        args = ApplicationHelper.h_and_sym(args)

        result = AttachSocialNetwork.call(args: args, ctx: ctx)
        if result.failure?
          ctx.add_error(GraphqlHelper.execution_error(result.message))
        end
        { user: result.user }
      end
    end
  end
end
