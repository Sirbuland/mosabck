module UserComponent
  module Resolvers
    class UpdateUserResolver
      def call(_obj, args, ctx)
        args = ApplicationHelper.h_and_sym(args)
        args[:userId] = args[:id]
        result = UserComponent::Organizers::UpdateOrganizer.call(args: args)
        if result.failure?
          ctx.add_error(GraphqlHelper.execution_error(result.message))
        else
          { user: result.user }
        end
      end
    end
  end
end
