class CreateResearches < ActiveRecord::Migration[5.1]
  def change
    create_table :researches do |t|
      t.references :user, foreign_key: true
      t.string :type
      t.string :source_url
      t.string :title
      t.string :description
      t.datetime :timestamp
      t.string :reference
      t.string :file_path

      t.timestamps
    end
  end
end
