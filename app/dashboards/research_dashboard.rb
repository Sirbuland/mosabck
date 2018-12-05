require "administrate/base_dashboard"

class ResearchDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    research_type: Field::String,
    source_url: Field::String,
    title: Field::String,
    description: Field::String,
    timestamp: Field::DateTime,
    reference: Field::String,
    file_path: Field::String,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    user: Field::BelongsTo,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :id,
    :research_type,
    :source_url,
    :title,
    :description,
    :timestamp,
    :reference,
    :file_path,
    :created_at,
    :updated_at,
    :user,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :id,
    :research_type,
    :source_url,
    :title,
    :description,
    :timestamp,
    :reference,
    :file_path,
    :created_at,
    :updated_at,
    :user,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :research_type,
    :source_url,
    :title,
    :description,
    :timestamp,
    :reference,
    :file_path,
    :user,
  ].freeze

  # Overwrite this method to customize how researches are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(research)
  #   "Research ##{research.id}"
  # end
end
