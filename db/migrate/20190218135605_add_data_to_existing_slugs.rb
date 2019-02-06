class AddDataToExistingSlugs < ActiveRecord::Migration[5.2]
  def change
    Research.with_deleted.update_all(slug: nil)
    Research.find_each(&:save)
  end
end
