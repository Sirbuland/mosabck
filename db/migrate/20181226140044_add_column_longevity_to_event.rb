class AddColumnLongevityToEvent < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :logevity, :string
  end
end
