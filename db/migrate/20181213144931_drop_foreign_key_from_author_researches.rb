class DropForeignKeyFromAuthorResearches < ActiveRecord::Migration[5.2]
  def up
  	remove_foreign_key :author_researches, column: :author_id
  end
  def down
  	add_foreign_key :author_researches, :author_id
  end
end
