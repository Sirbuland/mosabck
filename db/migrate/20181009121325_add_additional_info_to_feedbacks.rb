class AddAdditionalInfoToFeedbacks < ActiveRecord::Migration[5.1]
  def change
    add_column :feedbacks, :additional_info, :jsonb, default: '{}'
  end
end
