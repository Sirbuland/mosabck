require 'administrate/base_dashboard'

class FeedbackDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    created_at: Field::DateTime.with_options(
      format: '%m/%d/%Y %H:%M %Z'
    ),
    user_first_name: Field::String.with_options(
      searchable: false
    ),
    user_last_name: Field::String.with_options(
      searchable: false
    ),
    user_email: Field::String.with_options(
      searchable: false
    ),
    page: Field::String.with_options(
      searchable: false
    ),
    message: Field::String
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    created_at
    user_first_name
    user_last_name
    user_email
    page
    message
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    created_at
    user_first_name
    user_last_name
    user_email
    page
    message
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
  ].freeze

  # Overwrite this method to customize how auth identities are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(auth_identity)
  #   "AuthIdentity ##{auth_identity.id}"
  # end
end
