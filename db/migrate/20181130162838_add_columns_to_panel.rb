class AddColumnsToPanel < ActiveRecord::Migration[5.1]
  def change
    add_column :panels, :graf_panel_id, :int
    add_column :panels, :graf_dash_uri, :string
  end
end
