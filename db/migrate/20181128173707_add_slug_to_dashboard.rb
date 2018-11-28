class AddSlugToDashboard < ActiveRecord::Migration[5.1]
  def change
    add_column :dashboards, :slug, :string
  end
end
