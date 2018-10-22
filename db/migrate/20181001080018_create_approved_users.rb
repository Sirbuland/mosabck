class CreateApprovedUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :approved_users do |t|
      t.string :email, limit: 255, index: true, null: false
    end
  end
end
