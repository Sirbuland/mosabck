require "administrate/base_dashboard"

class ExchangeDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    user: Field::BelongsTo,
    crypto_assets: Field::HasMany,
    id: Field::Number,
    exchange: Field::String,
    vetted: Field::Boolean,
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
    :exchange,
    :vetted,
    :user,
    :crypto_assets,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :id,
    :exchange,
    :vetted,
    :created_at,
    :updated_at,
    :user,
    :crypto_assets,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :exchange,
    :vetted,
    :user,
    :crypto_assets,
  ].freeze

  # Overwrite this method to customize how exchanges are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(exchange)
  #   "Exchange ##{exchange.id}"
  # end
end
