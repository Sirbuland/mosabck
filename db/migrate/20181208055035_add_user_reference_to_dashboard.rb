class AddUserReferenceToDashboard < ActiveRecord::Migration[5.1]
  def change
    add_reference :dashboards, :user, foreign_key: true
  end
end
