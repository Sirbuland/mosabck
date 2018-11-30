class AddStartDateFromPanel < ActiveRecord::Migration[5.1]
  def change
    add_column :panels, :start_date, :bigint
  end
end
