module UserComponent
  module Resolvers
    class UserByIdResolver
      def call(_obj, args, ctx)
        user_id = args[:id]
        user = User.find_by_id(user_id)
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
