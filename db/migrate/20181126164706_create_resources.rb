class CreateResources < ActiveRecord::Migration[5.1]
  def change
    create_table :resources do |t|
      t.string :name
      t.string :description
      t.string :attribute1
      t.string :attribute2
      t.references :event, foreign_key: true

      t.timestamps
    end
  end
end
