class Notification < ApplicationRecord
  belongs_to :user
  after_create :schedule

  def schedule
    SendNotificationWorker.perform_at(Time.parse(date).utc, id)
  end
end
