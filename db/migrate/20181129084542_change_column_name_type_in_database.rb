class ChangeColumnNameTypeInDatabase < ActiveRecord::Migration[5.1]
  def change
  	rename_column :researches, :type, :research_type
  	rename_column :events, :type, :event_type
  	rename_column :videos, :type, :video_type
  end
end
