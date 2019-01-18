class AddDeletedAtToDashboard < ActiveRecord::Migration[5.2]
  def change
     add_column :dashboards, :deleted_at, :datetime
    add_index :dashboards, :deleted_at
  end
end
