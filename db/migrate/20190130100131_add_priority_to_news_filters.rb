class AddPriorityToNewsFilters < ActiveRecord::Migration[5.2]
  def change
    add_column :news_filters, :priority, :integer, default: 0
  end
end
