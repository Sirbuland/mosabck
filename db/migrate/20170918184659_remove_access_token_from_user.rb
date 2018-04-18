class RemoveAccessTokenFromUser < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :access_token
  end
end
