module AuthenticationComponent
  module Resolvers
    class SignInClassicResolver
      def call(_obj, args = ApplicationHelper.h_and_sym(args), ctx)
        result =
          AuthenticationComponent::Operations::SignInClassic.new.call(args)
        value = result.value
        if result.success?
          { user: value[:user], jwt: value[:jwt] }
        else
          ctx.add_error(GraphqlHelper.execution_error(result.failure))
        end
      end
    end
  end
end
