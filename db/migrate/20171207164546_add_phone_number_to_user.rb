class AddPhoneNumberToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :phone_number_string, :string
  end
end
