class CreateDashboards < ActiveRecord::Migration[5.1]
  def change
    create_table :dashboards do |t|
      t.string :uid
      t.string :title
      t.string :uri
      t.string :url

      t.timestamps
    end
  end
end
