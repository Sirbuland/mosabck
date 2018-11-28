class RemoveUriFromDashboard < ActiveRecord::Migration[5.1]
  def change
    remove_column :dashboards, :uri, :string
  end
end
