class CreateAuthIdentities < ActiveRecord::Migration[5.1]
  def change
    create_table :auth_identities do |t|
      t.string :identity_type
      t.references :user, foreign_key: true
      t.json :payload

      t.timestamps
    end
  end
end
