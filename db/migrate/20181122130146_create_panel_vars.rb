class CreatePanelVars < ActiveRecord::Migration[5.1]
  def change
    create_table :panel_vars do |t|
      t.references :panel, foreign_key: true
      t.references :var,   foreign_key: true

      t.timestamps
    end
  end
end
