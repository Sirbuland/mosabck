class AddDataToExistingSlugs < ActiveRecord::Migration[5.2]
  def change
    Research.update_all(slug: nil)
    Research.find_each(&:save)
  end
end
