class AddRulesToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :rules, :json,
               default: ApplicationPolicy::DEFAULT_POLICIES[:user]
  end
end
