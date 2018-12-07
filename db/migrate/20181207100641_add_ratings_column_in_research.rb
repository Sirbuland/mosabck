class AddRatingsColumnInResearch < ActiveRecord::Migration[5.1]
  def change
  	add_column :researches, :rating, :integer, default: 0
  end
end
