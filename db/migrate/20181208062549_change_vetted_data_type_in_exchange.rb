class ChangeVettedDataTypeInExchange < ActiveRecord::Migration[5.1]
  def up
  	remove_column :exchanges, :vetted
  	add_column :exchanges, :vetted, :boolean
  end

  def down
  	remove_column :exchanges, :vetted
  	add_column :exchanges, :vetted, :string
  end
end
