class CreateTokens < ActiveRecord::Migration[5.1]
  def change
    create_table :tokens do |t|
      t.references :installation, foreign_key: true

      t.string :token
      t.string :token_type

      t.timestamps
    end
  end
end
