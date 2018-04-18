module UserComponent
  module Resolvers
    class UserFriendshipStatusResolver
      def call(_obj, args = ApplicationHelper.h_and_sym(args), ctx)
        result =
          UserComponent::Interactors::UserFriendshipStatus.call(args: args)
        if result.failure?
          ctx.add_error(GraphqlHelper.execution_error(result.message))
        else
          result.friendship_status
        end
      end
    end
  end
end
