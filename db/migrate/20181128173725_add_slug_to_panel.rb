class AddSlugToPanel < ActiveRecord::Migration[5.1]
  def change
    add_column :panels, :slug, :string
  end
end
