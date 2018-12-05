require "administrate/base_dashboard"

class WalletDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    name: Field::String,
    number_major_wallets: Field::String,
    number_mobile_wallets: Field::String,
    description: Field::String,
    image_link: Field::String,
    source_link: Field::String,
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
    :name,
    :number_major_wallets,
    :number_mobile_wallets,
    :description,
    :image_link,
    :source_link,
    :created_at,
    :user,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :id,
    :name,
    :number_major_wallets,
    :number_mobile_wallets,
    :description,
    :image_link,
    :source_link,
    :created_at,
    :updated_at,
    :user,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :name,
    :number_major_wallets,
    :number_mobile_wallets,
    :description,
    :image_link,
    :source_link,
    :user,
  ].freeze

  # Overwrite this method to customize how wallets are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(wallet)
  #   "Wallet ##{wallet.id}"
  # end
end
