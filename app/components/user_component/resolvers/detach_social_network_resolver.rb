module UserComponent
  module Resolvers
    class DetachSocialNetworkResolver
      def call(_obj, args, ctx)
        args = ApplicationHelper.h_and_sym(args)

        result = DetachSocialNetwork.call(
          args: args,
          ctx: ctx,
          check_for_empty_profile: true
        )
        if result.failure?
          ctx.add_error(GraphqlHelper.execution_error(result.message))
        end
        { user: result.user }
      end
    end
  end
end
