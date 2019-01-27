class AddColumnTypeToNewsFilters < ActiveRecord::Migration[5.2]
  def change
    add_column :news_filters, :filter_type, :string
  end
end
