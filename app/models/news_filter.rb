class NewsFilter < ApplicationRecord
  # has_many :user_news_filters, dependent: :destroy
  belongs_to :user

  DEFAULT_FILTERS = [
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
  
end
