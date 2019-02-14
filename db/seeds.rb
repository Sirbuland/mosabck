# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Research.all.map(&:save)

User.all.each do |user|
	NewsFilter::DEFAULT_FILTERS.each do |filter|
    news_filter = user.news_filters.find_or_initialize_by name: filter[:name]
    news_filter.assign_attributes({ 
      description: filter[:description], 
      filter_type: filter[:filter_type], 
      search_term: filter[:search_term],
      selected: filter[:selected],
      priority: filter[:priority]
    })
    news_filter.save!
	end
end
