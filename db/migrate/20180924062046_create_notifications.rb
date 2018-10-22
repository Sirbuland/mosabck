class CreateNotifications < ActiveRecord::Migration[5.1]
  def change
    create_table :notifications do |t|
      t.string :message
      t.string :status
      t.string :date
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
