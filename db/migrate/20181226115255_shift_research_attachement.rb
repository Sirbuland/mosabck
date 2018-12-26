class ShiftResearchAttachement < ActiveRecord::Migration[5.2]
  def up
  	Research.all.each do |research|
  		if research.attachment.present?
  			attachment_object = research.attachments.new
  			attachment_object.attached_file = research.attachment
  			attachment_object.save!
  		end
  	end

  	remove_column :researches, :attachment
  end

  def down
  	add_column :researches, :attachment, :string
  end
end
