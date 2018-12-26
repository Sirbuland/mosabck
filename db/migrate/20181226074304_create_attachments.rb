class CreateAttachments < ActiveRecord::Migration[5.2]
  def change
    create_table :attachments do |t|
      t.string :name
      t.string :attached_file
      t.text :description
      t.string :attachable_type
      t.bigint :attachable_id

      t.timestamps
    end
    add_index :attachments, [ :attachable_id, :attachable_type ], unique: true
  end
end
