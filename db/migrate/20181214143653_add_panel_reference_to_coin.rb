class AddPanelReferenceToCoin < ActiveRecord::Migration[5.2]
  def change
    add_reference :coins, :panel, foreign_key: true
  end
end
