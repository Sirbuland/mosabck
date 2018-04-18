class CreateUserDevices < ActiveRecord::Migration[5.1]
  def change
    create_table :user_devices do |t|
      t.references :user, foreign_key: true
      t.string :device_id
      t.boolean :logged_in

      t.timestamps
    end
  end
end
