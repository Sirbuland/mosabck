class CreatePeople < ActiveRecord::Migration[5.1]
  def change
    create_table :people do |t|
      t.string :first_name
      t.string :second_name
      t.string :description
      t.string :attribute1
      t.string :attribute2
      t.references :video, foreign_key: true

      t.timestamps
    end
  end
end
