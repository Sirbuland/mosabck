module UserComponent
  module Resolvers
    class ResetPasswordResolver
      def call(_obj, args = ApplicationHelper.h_and_sym(args), ctx)
        result =
          UserComponent::Organizers::ResetPasswordOrganizer.call(args: args)
        if result.failure?
          ctx.add_error(GraphqlHelper.execution_error(result.message))
        else
          { messageBody: result.message_body }
        end
      end
    end
  end
end
