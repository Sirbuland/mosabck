module AuthenticationComponent
  module Resolvers
    class SignOutResolver
      def call(_obj, args = ApplicationHelper.h_and_sym(args), ctx)
        user = ctx[:current_user]
        if user.present?
          device = ctx[:current_device]
          if device.present?
            UserService.new(user: user).logout_user_on_device(device)
            { user: user }
          else
            error_msg = I18n.t('errors.messages.not_found', entity: 'Device')
            ctx.add_error(GraphqlHelper.execution_error(error_msg))
          end
        else
          ctx.add_error(GraphQL::ExecutionError.new('User not found'))
        end
      end
    end
  end
end
