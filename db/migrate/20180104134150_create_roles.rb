class CreateRoles < ActiveRecord::Migration[5.1]
  def up
    create_table :roles do |t|
      t.json :schema, default: {}
      t.string :name
      t.string :description
      t.integer :priority

      t.timestamps
    end
  end

  def down
    drop_table :roles
  end
end
