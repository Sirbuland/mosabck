class ChangeVettedDataTypeInExchange < ActiveRecord::Migration[5.1]
  def change
  	remove_column :exchanges, :vetted
  	add_column :exchanges, :vetted, :boolean
  end
end
