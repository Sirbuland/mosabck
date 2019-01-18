class AddDeletedAtToTables < ActiveRecord::Migration[5.2]
  def change

    add_column :attachments, :deleted_at, :datetime
    add_index :attachments, :deleted_at
    
    add_column :keywords, :deleted_at, :datetime
    add_index :keywords, :deleted_at
    
    add_column :author_researches, :deleted_at, :datetime
    add_index :author_researches, :deleted_at
    
    add_column :keyword_research_videos, :deleted_at, :datetime
    add_index :keyword_research_videos, :deleted_at
  end
end
