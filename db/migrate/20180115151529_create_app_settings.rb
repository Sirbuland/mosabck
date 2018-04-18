class CreateAppSettings < ActiveRecord::Migration[5.1]
  def change
    create_table :app_settings do |t|
      t.string :name
      t.boolean :active, default: false
      t.string :value

      t.timestamps
    end
  end
end
