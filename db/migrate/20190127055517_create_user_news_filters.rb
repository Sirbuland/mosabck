class CreateUserNewsFilters < ActiveRecord::Migration[5.2]
  def change
    create_table :user_news_filters do |t|
      t.references :user, foreign_key: true
      t.references :news_filter, foreign_key: true

      t.timestamps
    end
  end
end
