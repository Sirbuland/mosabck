class CreateCryptoAssets < ActiveRecord::Migration[5.1]
  def change
    create_table :crypto_assets do |t|
      t.string :name
      t.string :attribute1
      t.string :attribute2

      t.timestamps
    end
  end
end
