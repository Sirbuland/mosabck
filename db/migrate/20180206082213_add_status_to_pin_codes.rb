class AddStatusToPinCodes < ActiveRecord::Migration[5.1]
  def change
    add_column :pin_codes, :status, :string, default: :active
    add_column :pin_codes, :auth_identity_id, :integer
  end
end
