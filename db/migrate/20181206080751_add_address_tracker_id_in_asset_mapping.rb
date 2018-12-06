class AddAddressTrackerIdInAssetMapping < ActiveRecord::Migration[5.1]
  def change
  	add_reference :asset_mappings, :address_tracker, index: true
  end
end
