class CreateKeywordResearchVideos < ActiveRecord::Migration[5.1]
  def change
    create_table :keyword_research_videos do |t|
      t.references :keyword, foreign_key: true
      t.references :research, foreign_key: true
      t.references :video, foreign_key: true

      t.timestamps
    end
  end
end
