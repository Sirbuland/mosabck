class CreateVars < ActiveRecord::Migration[5.1]
  def change
    create_table :vars do |t|
      t.string :name

      t.timestamps
    end
  end
end
