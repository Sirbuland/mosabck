class RemoveEndDateFromPanel < ActiveRecord::Migration[5.1]
  def change
    remove_column :panels, :end_date, :timestamp
  end
end
