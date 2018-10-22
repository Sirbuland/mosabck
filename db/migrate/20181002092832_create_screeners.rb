class CreateScreeners < ActiveRecord::Migration[5.1]
  def change
    create_table :screeners do |t|
      t.string :name, limit: 255
      t.string :text
      t.jsonb :filters, default: '[]'
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
