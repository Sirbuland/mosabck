class RemoveEmailConfirmendFromUser < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :email_confirmed
  end
end
