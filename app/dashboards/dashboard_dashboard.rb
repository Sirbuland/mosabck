require "administrate/base_dashboard"

class DashboardDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    user: Field::BelongsTo,
    panels: Field::HasMany,
    id: Field::Number,
    uid: Field::String,
    title: Field::String,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    slug: Field::String,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :user,
    :panels,
    :id,
    :uid,
    :title,
    :slug,
    :created_at,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :user,
    :panels,
    :id,
    :uid,
    :title,
    :created_at,
    :updated_at,
    :slug,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :user,
    :panels,
    :uid,
    :title,
    :slug,
  ].freeze

  # Overwrite this method to customize how dashboards are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(dashboard)
  #   "Dashboard ##{dashboard.id}"
  # end
end
