module UserComponent
  module Interactors
    class GetUserFromQuery
      include Interactor

      def call
        user_id = context.args[:userId] || context.user_id
        user = User.find_by(id: user_id)
        if user.present?
          context.user = user
        else
          error_msg = I18n.t('errors.messages.not_found', entity: 'User')
          context.fail!(message: error_msg)
        end
      end
    end
  end
end
