class AddDeletedAtToResearchs < ActiveRecord::Migration[5.2]
  def change
    add_column :researches, :deleted_at, :datetime
    add_index :researches, :deleted_at
  end
end
