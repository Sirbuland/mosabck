class AddThumbsToExistingAttachments < ActiveRecord::Migration[5.2]
  def change
    Attachment.all.each do |attachment|
      if attachment.attached_file.present? and attachment.attached_file.file.exists?
        attachment.attached_file.recreate_versions!
      end
    end
  end
end
