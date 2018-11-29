class CreateMerchants < ActiveRecord::Migration[5.1]
  def change
    create_table :merchants do |t|
      t.references :user, foreign_key: true
      t.string :asset_processor
      t.string :merchant
      t.string :source_url
      t.string :description

      t.timestamps
    end
  end
end
