module UserComponent
  module Resolvers
    class VerifyEmailResolver
      def call(_obj, args, ctx)
        hashed_args = ApplicationHelper.h_and_sym(args)
        result = UserComponent::Operations::VerifyEmail.new.call(hashed_args)
        if result.failure?
          ctx.add_error(GraphqlHelper.execution_error(result))
        else
          { result: 'Success. Email activated' }
        end
      end
    end
  end
end
