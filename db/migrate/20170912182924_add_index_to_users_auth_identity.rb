class AddIndexToUsersAuthIdentity < ActiveRecord::Migration[5.1]
  def change
    add_index :users, :auth_identity_id
  end
end
