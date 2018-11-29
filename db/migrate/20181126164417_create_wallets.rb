class CreateWallets < ActiveRecord::Migration[5.1]
  def change
    create_table :wallets do |t|
      t.references :user, foreign_key: true
      t.string :name
      t.string :number_major_wallets
      t.string :number_mobile_wallets
      t.string :description
      t.string :image_link
      t.string :source_link

      t.timestamps
    end
  end
end
