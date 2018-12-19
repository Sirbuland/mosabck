class AddAttachmentToResearch < ActiveRecord::Migration[5.2]
  def change
    add_column :researches, :attachment, :string
  end
end
