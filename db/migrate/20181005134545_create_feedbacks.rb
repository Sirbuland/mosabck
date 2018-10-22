class CreateFeedbacks < ActiveRecord::Migration[5.1]
  def change
    create_table :feedbacks do |t|
      t.text :message
      t.belongs_to :user, foreign_key: false

      t.timestamps
    end
  end
end
