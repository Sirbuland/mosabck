class AddSelectedFlagNewsFilters < ActiveRecord::Migration[5.2]
  def change
  	add_column :news_filters, :selected, :boolean, default: false
  end
end
