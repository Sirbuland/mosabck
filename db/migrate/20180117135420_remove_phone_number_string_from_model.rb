class RemovePhoneNumberStringFromModel < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :phone_number_string
  end
end
