class AddBackgroundImageToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :backgound_img_url, :string
  end
end
