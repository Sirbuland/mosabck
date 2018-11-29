class CreateAssetMappings < ActiveRecord::Migration[5.1]
  def change
    create_table :asset_mappings do |t|
      t.references :exchange, foreign_key: true
      t.references :research, foreign_key: true
      t.references :merchant, foreign_key: true
      t.references :event, foreign_key: true
      t.references :wallet, foreign_key: true
      t.references :video, foreign_key: true
      t.references :crypto_asset, foreign_key: true

      t.timestamps
    end
  end
end
