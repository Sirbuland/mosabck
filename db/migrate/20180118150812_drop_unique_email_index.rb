class DropUniqueEmailIndex < ActiveRecord::Migration[5.1]
  def up
    if index_name_exists? :users, 'index_users_on_email'
      remove_index :users, name: 'index_users_on_email'
    end
  end

  def down
    add_index :users, :email, unique: true
  end
end
