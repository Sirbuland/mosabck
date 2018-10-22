module UserComponent
  module Interactors
    module SendFeedback
      class Send
        include Interactor

        def call
          emails = context.receivers.map(&:email)
          path = context.file.path
          AdminMailer.feedback(emails, path).deliver_now
        end
      end
    end
  end
end
