module MiscComponent
  module Resolvers
    class StandardResolver
      def call(obj, args = ApplicationHelper.h_and_sym(args), ctx)
        result = interactor.call(obj: obj, args: args, ctx: ctx)
        if result.success?
          on_success_return(result)
        else
          on_failure_return(ctx, result)
        end
      end

      def on_failure_return(ctx, result)
        ctx.add_error(GraphqlHelper.execution_error(result.message))
      end
    end
  end
end
