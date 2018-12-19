class AddSlugToResearch < ActiveRecord::Migration[5.2]
  def change
    add_column :researches, :slug, :string
    add_index :researches, :slug, unique: true
  end
end
