class CreateCoins < ActiveRecord::Migration[5.2]
  def change
    create_table :coins do |t|
      t.string :text
      t.string :value
      t.boolean :selected
      t.references :dashboard, foreign_key: true

      t.timestamps
    end
  end
end
