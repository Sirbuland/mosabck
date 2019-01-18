class Attachment < ApplicationRecord
  belongs_to :attachable, polymorphic: true

  mount_uploader :attached_file, FileUploader
  
  acts_as_paranoid

  def attached_file_url
    attached_file.url if attached_file.present?
  end
end
