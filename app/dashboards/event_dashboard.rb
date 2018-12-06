require "administrate/base_dashboard"

class EventDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    user: Field::BelongsTo,
    crypto_assets: Field::HasMany,
    resources: Field::HasMany,
    id: Field::Number,
    event_type: Field::String,
    event_date: Field::String,
    event_title: Field::String,
    description: Field::Text,
    importance: Field::String,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :id,
    :event_type,
    :event_date,
    :event_title,
    :description,
    :importance,
    :created_at,
    :user,
    :crypto_assets,
    :resources
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :id,
    :event_type,
    :event_date,
    :event_title,
    :importance,
    :created_at,
    :updated_at,
    :description,
    :user,
    :crypto_assets,
    :resources
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :event_type,
    :event_date,
    :event_title,
    :importance,
    :description,
    :user,
    :crypto_assets,
    :resources
  ].freeze

  # Overwrite this method to customize how events are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(event)
  #   "Event ##{event.id}"
  # end
end
