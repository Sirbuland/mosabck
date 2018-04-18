class ContactMethod < ActiveRecord::Migration[5.1]
  def change
    create_table :contact_methods do |t|
      t.references :user, foreign_key: true
      t.string :type
      t.boolean :main, default: false
      t.boolean :verified, default: false
      t.boolean :confirmed, default: false
      t.boolean :use_for_newsletter, default: false
      t.string :value
      t.timestamps
    end
  end
end
