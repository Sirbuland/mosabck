require "administrate/base_dashboard"

class ResourceDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    name: Field::String,
    description: Field::Text,
    attribute1: Field::String,
    attribute2: Field::String,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    event: Field::BelongsTo,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :id,
    :name,
    :description,
    :attribute1,
    :attribute2,
    :created_at,
    :event,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :event,
    :id,
    :name,
    :description,
    :attribute1,
    :attribute2,
    :created_at,
    :updated_at,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :name,
    :description,
    :attribute1,
    :attribute2,
    :event,
  ].freeze

  # Overwrite this method to customize how resources are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(resource)
  #   "Resource ##{resource.id}"
  # end
end
