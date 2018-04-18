class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.string :country
      t.string :countryCode
      t.string :city
      t.string :street
      t.string :streetNumber
      t.string :zip
      t.string :timeZone
      t.st_point :lonlat, srid: 4326
      t.references :locateable, polymorphic: true, index: true
      t.timestamps
    end

    add_index :locations, :lonlat, using: :gist
  end
end
