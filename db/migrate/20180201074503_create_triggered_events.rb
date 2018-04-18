class CreateTriggeredEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :triggered_events do |t|
      t.string :tracked_event_action
      t.string :status
      t.string :message
      t.json :payload, default: { phone: :all, email: :all }

      t.timestamps
    end
  end
end
