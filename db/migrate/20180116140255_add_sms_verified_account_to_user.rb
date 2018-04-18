class AddSmsVerifiedAccountToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :sms_verified, :boolean, default: false
    add_column :users, :pin, :string
  end
end
