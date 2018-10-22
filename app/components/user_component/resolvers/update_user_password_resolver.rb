module UserComponent
  module Resolvers
    class UpdateUserPasswordResolver
      def call(_obj, args, ctx)
        args = ApplicationHelper.h_and_sym(args)
        args[:userId] = args[:id]
        result =
          UserComponent::Organizers::UpdatePasswordOrganizer.call(args: args)
        if result.failure?
          error = GraphqlHelper.execution_error(
            msg: result.message, status: :not_found
          )
          ctx.add_error error
        else
          { user: result.user }
        end
      end
    end
  end
end
