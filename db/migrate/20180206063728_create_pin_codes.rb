class CreatePinCodes < ActiveRecord::Migration[5.1]
  def change
    create_table :pin_codes do |t|
      t.references :user, foreign_key: true
      t.date :expiration_date
      t.string :action
      t.string :value

      t.timestamps
    end
  end
end
