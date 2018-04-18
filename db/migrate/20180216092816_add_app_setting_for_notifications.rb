class AddAppSettingForNotifications < ActiveRecord::Migration[5.1]
  def change
    allowed_all = %i[email phone gcm apns expo].map { |channel| [channel, true] }.to_h
    add_column :triggered_events, :notification_rules, :json, default: allowed_all
  end
end
