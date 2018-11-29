class CreateExchanges < ActiveRecord::Migration[5.1]
  def change
    create_table :exchanges do |t|
      t.string :exchange
      t.string :vetted
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
