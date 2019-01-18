class AddDeletedAtToScreeners < ActiveRecord::Migration[5.2]
  def change
    add_column :screeners, :deleted_at, :datetime
    add_index :screeners, :deleted_at
  end
end
