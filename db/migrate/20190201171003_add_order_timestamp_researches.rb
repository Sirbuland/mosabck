class AddOrderTimestampResearches < ActiveRecord::Migration[5.2]
  def change
  	add_column :researches, :order_timestamp, :datetime, default: Time.now
  end
end
