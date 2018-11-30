class RemoveStartDateFromPanel < ActiveRecord::Migration[5.1]
  def change
    remove_column :panels, :start_date, :timestamp
  end
end
