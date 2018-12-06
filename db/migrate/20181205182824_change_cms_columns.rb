class ChangeCmsColumns < ActiveRecord::Migration[5.1]
  def up
  	# change columns datatype
  	change_column :authors, :description, :text
    change_column :events, :description, :text
  	change_column :keywords, :description, :text
    change_column :merchants, :description, :text
    change_column :people, :description, :text
    change_column :researches, :description, :text
    change_column :resources, :description, :text
    change_column :videos, :description, :text
    change_column :wallets, :description, :text
    # remove timestamp column
    remove_column :events, :timestamp
    remove_column :researches, :timestamp
    # add missing columns
  	add_column :events, :event_date, :datetime
    add_column :events, :event_title, :string
    add_column :researches, :date_authored, :datetime
    add_column :wallets, :entry_date, :datetime
  end

  def down
  	change_column :authors, :description, :string
    change_column :events, :description, :string
    change_column :keywords, :description, :string
    change_column :merchants, :description, :string
    change_column :people, :description, :string
    change_column :researches, :description, :string
    change_column :resources, :description, :string
    change_column :videos, :description, :string
    change_column :wallets, :description, :string
    # add removed columns
    add_column :events, :timestamp, :string
    add_column :researches, :timestamp, :string
    # remove added columns
    remove_column :events, :event_date
    remove_column :events, :event_title
    remove_column :researches, :date_authored
    remove_column :wallets, :entry_date
  end
end
