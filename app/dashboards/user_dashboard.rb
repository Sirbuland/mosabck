require 'administrate/base_dashboard'

class UserDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    email: Field::String.with_options(searchable: false),
    auth_identities: Field::HasMany,
    roles: Field::HasMany,
    id: Field::Number,
    encrypted_password: Field::String.with_options(searchable: false),
    reset_password_token: Field::String.with_options(searchable: false),
    reset_password_sent_at: Field::DateTime,
    remember_created_at: Field::DateTime,
    sign_in_count: Field::Number,
    current_sign_in_at: Field::DateTime,
    last_sign_in_at: Field::DateTime,
    current_sign_in_ip: Field::String.with_options(searchable: false),
    last_sign_in_ip: Field::String.with_options(searchable: false),
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    uid: Field::String.with_options(searchable: false),
    bio: Field::String.with_options(searchable: false),
    username: Field::String.with_options(searchable: false),
    first_name: Field::String,
    last_name: Field::String,
    avatar_url: AvatarField,
    ref_code: Field::String.with_options(searchable: false),
    referrer: Field::BelongsTo.with_options(class_name: 'User')
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    first_name
    last_name
    email
    roles
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    id
    first_name
    last_name
    email
    reset_password_token
    reset_password_sent_at
    remember_created_at
    sign_in_count
    current_sign_in_at
    last_sign_in_at
    current_sign_in_ip
    last_sign_in_ip
    created_at
    updated_at
    bio
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    first_name
    last_name
    roles
    bio
  ].freeze

  # Overwrite this method to customize how users are displayed
  # across all pages of the admin dashboard.
  #
  def display_resource(user)
    "User ##{user.id} #{user.username}"
  end
end
