class AddValueToVar < ActiveRecord::Migration[5.1]
  def change
    add_column :vars, :value, :string
  end
end
