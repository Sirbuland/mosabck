task send_feedback: :environment do
  UserComponent::Organizers::SendFeedback.call(
    from: DateTime.yesterday.beginning_of_day,
    to: DateTime.now.beginning_of_day
  )
end
