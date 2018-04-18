class AddStatusToAuthIdentities < ActiveRecord::Migration[5.1]
  def change
    add_column :auth_identities, :status, :string, default: 'active'
  end
end
