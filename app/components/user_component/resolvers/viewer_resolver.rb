module UserComponent
  module Resolvers
    class ViewerResolver
      def call(_obj, args = ApplicationHelper.h_and_sym(args), ctx)
        user = ctx[:current_user]
        if user.present?
          user
        else
          error_msg = I18n.t('errors.messages.not_found', entity: 'User')
          ctx.add_error(GraphqlHelper.execution_error(error_msg))
        end
      end
    end
  end
end
