require "administrate/base_dashboard"

class VideoDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    video_type: Field::String,
    title: Field::String,
    timestamp: Field::String,
    description: Field::Text,
    source_url: Field::String,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    user: Field::BelongsTo,
    crypto_assets: Field::HasMany,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :id,
    :video_type,
    :title,
    :timestamp,
    :description,
    :source_url,
    :created_at,
    :user,
    :crypto_assets
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :id,
    :video_type,
    :title,
    :timestamp,
    :description,
    :source_url,
    :created_at,
    :updated_at,
    :user,
    :crypto_assets
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :video_type,
    :title,
    :timestamp,
    :description,
    :source_url,
    :user,
    :crypto_assets
  ].freeze

  # Overwrite this method to customize how videos are displayed
  # across all pages of the admin dashboard.
  #
  def display_resource(video)
    "#{video.title}"
  end
end
