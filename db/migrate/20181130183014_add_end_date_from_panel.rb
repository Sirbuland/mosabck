class AddEndDateFromPanel < ActiveRecord::Migration[5.1]
  def change
    add_column :panels, :end_date, :bigint
  end
end
