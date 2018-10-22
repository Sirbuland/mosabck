module UserComponent
  module Interactors
    module SendFeedback
      class LoadReceivers
        include Interactor

        def call
          receivers = User.role_is(:feedback_receiver).load
          context.fail!(message: 'Receivers not found') if receivers.blank?
          context.receivers = receivers
        end
      end
    end
  end
end
