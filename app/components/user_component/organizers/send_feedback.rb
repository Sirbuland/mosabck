module UserComponent
  module Organizers
    class SendFeedback
      include Interactor::Organizer

      namespace = UserComponent::Interactors::SendFeedback
      organize namespace::LoadReceivers,
        namespace::CreateFeedbackFile,
        namespace::Send
    end
  end
end
