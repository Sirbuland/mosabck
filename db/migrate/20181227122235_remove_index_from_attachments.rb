class RemoveIndexFromAttachments < ActiveRecord::Migration[5.2]
  def change
  	remove_index "attachments", name: "index_attachments_on_attachable_id_and_attachable_type"

  end
end
