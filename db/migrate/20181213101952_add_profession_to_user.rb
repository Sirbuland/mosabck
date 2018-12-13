class AddProfessionToUser < ActiveRecord::Migration[5.2]
  def up
    add_column :users, :profession, :string
    add_column :users, :description, :string
    remove_column :users, :avatar_url
  end

  def down
  	add_column :users, :avatar_url, :string
  	remove_column :users, :profession
  	remove_column :users, :description
  end
end
