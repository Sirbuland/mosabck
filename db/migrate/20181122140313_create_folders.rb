class CreateFolders < ActiveRecord::Migration[5.1]
  def change
    create_table :folders do |t|
      t.references :dashboard, foreign_key: true
      t.string :uid
      t.string :title

      t.timestamps
    end
  end
end
