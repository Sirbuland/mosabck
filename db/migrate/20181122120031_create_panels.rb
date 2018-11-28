class CreatePanels < ActiveRecord::Migration[5.1]
  def change
    create_table :panels do |t|
      t.string   :name
      t.string   :description
      t.datetime :start_date
      t.datetime :end_date

      t.belongs_to :dashboard, foreign_key: true

      t.timestamps
    end
  end
end
