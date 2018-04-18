class SendNotificationWorker
  include Sidekiq::Worker

  POSSIBLE_OPERATIONS = %i[SendWithEmail SendWithSms].freeze

  OPERATIONS = {
    phone: 'NotificationComponent::Operations::SendWithSms',
    email: 'NotificationComponent::Operations::SendWithEmail'
  }.freeze

  def perform(notification_id)
    notification = Notification.find(notification_id)
    op = OPERATIONS[notification.channel.to_sym].constantize.new
    result = op.call(notification: notification)
    p result.failure if result.failure?
  end
end
