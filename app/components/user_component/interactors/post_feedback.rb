module UserComponent
  module Interactors
    class PostFeedback
      include Interactor

      def call
        user = context.ctx[:current_user]
        args = context.args
        message = args[:message]
        additional_info = {
          page: args[:page],
          user_first_name: user.first_name,
          user_last_name: user.last_name,
          user_email: user.email
        }
        context.result = Feedback.create(
          user: user, message: message, additional_info: additional_info
        )
      end
    end
  end
end
