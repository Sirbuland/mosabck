require "administrate/base_dashboard"

class MerchantDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    asset_processor: Field::String,
    merchant: Field::String,
    source_url: Field::String,
    description: Field::Text,
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
    :asset_processor,
    :merchant,
    :source_url,
    :description,
    :created_at,
    :user,
    :crypto_assets,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :id,
    :asset_processor,
    :merchant,
    :source_url,
    :description,
    :created_at,
    :updated_at,
    :user,
    :crypto_assets,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :asset_processor,
    :merchant,
    :source_url,
    :description,
    :user,
    :crypto_assets,
  ].freeze

  # Overwrite this method to customize how merchants are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(merchant)
  #   "Merchant ##{merchant.id}"
  # end
end
