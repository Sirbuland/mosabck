class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.references :user, foreign_key: true
      t.string :type
      t.string :timestamp
      t.string :description
      t.string :importance

      t.timestamps
    end
  end
end
