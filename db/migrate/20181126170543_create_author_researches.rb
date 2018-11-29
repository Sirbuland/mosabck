class CreateAuthorResearches < ActiveRecord::Migration[5.1]
  def change
    create_table :author_researches do |t|
      t.references :research, foreign_key: true
      t.references :author, foreign_key: true

      t.timestamps
    end
  end
end
