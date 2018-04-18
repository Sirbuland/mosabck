class CreateInstallations < ActiveRecord::Migration[5.1]
  def change
    create_table :installations do |t|
      t.references :user, foreign_key: true

      t.string :device_type
      t.string :app_version
      t.timestamps
    end
  end
end
