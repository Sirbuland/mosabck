class CreateVideos < ActiveRecord::Migration[5.1]
  def change
    create_table :videos do |t|
      t.references :user, foreign_key: true
      t.string :type
      t.string :title
      t.string :timestamp
      t.string :description
      t.string :source_url

      t.timestamps
    end
  end
end
