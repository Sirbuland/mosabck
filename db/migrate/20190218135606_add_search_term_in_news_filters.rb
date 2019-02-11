class AddSearchTermInNewsFilters < ActiveRecord::Migration[5.2]
  def change
  	add_column :news_filters, :search_term, :string
  end
end
