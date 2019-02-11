# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Research.all.map(&:save)

news_filters = [
	{
    name: "bitcoin",
    description: "desc",
    filter_type: "coin",
    search_term: "bitcoin",
    selected: true,
    priority: 1
  },
  {
    name: "ethereum",
    description: "desc",
    filter_type: "coin",
    search_term: "ethereum",
    selected: false,
    priority: 2
  },
  {
    name: "xrp",
    description: "desc",
    filter_type: "coin",
    search_term: "ripple",
    selected: false,
    priority: 3
  },
  {
    name: "eos",
    description: "desc",
    filter_type: "coin",
    search_term: "eoscoin",
    selected: false,
    priority: 4
  },
  {
    name: "bitcoin cash",
    description: "desc",
    filter_type: "coin",
    search_term: "bitcoin cash",
    selected: false,
    priority: 5
  },
  {
    name: "china",
    description: "desc",
    filter_type: "topic",
    search_term: "china",
    selected: false,
    priority: 6
  },
  {
    name: "venture capital",
    description: "desc",
    filter_type: "topic",
    search_term: "venture capital",
    selected: false,
    priority: 7
  },
  {
    name: "ico",
    description: "desc",
    filter_type: "topic",
    search_term: "initial coin offering",
    selected: false,
    priority: 8
  },
  {
    name: "partnership",
    description: "desc",
    filter_type: "topic",
    search_term: "partnership",
    selected: false,
    priority: 9
  }
]

persisted_common_filters = []
news_filters.each do |filter|
	news_filter = NewsFilter.find_or_initialize_by name: filter[:name]
	news_filter.assign_attributes({ 
    description: filter[:description], 
    filter_type: filter[:filter_type], 
    search_term: filter[:search_term],
    selected: filter[:selected],
    priority: filter[:priority]
  })
	news_filter.save!
	persisted_common_filters << news_filter
end

User.all.each do |user|
	persisted_common_filters.each do |filter|
		user.news_filters << filter unless user.news_filters.exists? id: filter.id
	end
end
