class CreateNewsFilters < ActiveRecord::Migration[5.2]
  def change
    create_table :news_filters do |t|
      t.string :name
      t.string :description
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
