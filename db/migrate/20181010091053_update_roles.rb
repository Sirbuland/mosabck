class UpdateRoles < ActiveRecord::Migration[5.1]
  def up
    add_index :roles, :name, unique: true

    create_table :roles_users, id: false do |t|
      t.belongs_to :user, foreign_key: { on_delete: :cascade }
      t.belongs_to :role, foreign_key: true
    end

    remove_column :users, :role
  end

  def down
    remove_index :roles, :name
    drop_table :roles_users
    add_column :users, :role, :string
  end
end
