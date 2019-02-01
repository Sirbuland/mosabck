class AddPubulishedFlagInResearch < ActiveRecord::Migration[5.2]
  def change
  	add_column :researches, :published, :boolean, default: true
  end
end
