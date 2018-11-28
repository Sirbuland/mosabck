class RemoveUrlFromDashboard < ActiveRecord::Migration[5.1]
  def change
    remove_column :dashboards, :url, :string
  end
end
