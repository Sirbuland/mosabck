class AddAuthIdentityToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :auth_identity_id, :integer, index: true
  end
end
