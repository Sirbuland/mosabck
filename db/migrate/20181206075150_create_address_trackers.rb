class CreateAddressTrackers < ActiveRecord::Migration[5.1]
  def change
    create_table :address_trackers do |t|
      t.string :address_type
      t.string :address
      t.string :tags
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
