module MiscComponent
  module Resolvers
    class ActivatePin
      def call(_obj, args, ctx)
        result = UserComponent::Interactors::ActivatePin.new.call(args)
        value = result.value
        if result.success?
          { result: value[:status] }
        else
          ctx.add_error(GraphqlHelper.execution_error(result.failure))
        end
      end
    end
  end
end
