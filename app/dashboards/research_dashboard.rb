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
    description: Field::Text,
    date_authored: Field::DateTime,
    reference: Field::String,
    file_path: Field::String,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    user: Field::BelongsTo,
    attachment: Field::ActiveStorage,
    secondary_crypto_assets: Field::HasMany.with_options(
      source: :crypto_asset,
      class_name: "CryptoAsset"
    ),
    # primary_crypto_asset: Field::BelongsTo.with_options(
    #   class_name: "CryptoAsset",
    #   foreign_key: :crypto_asset_id
    # ),
    keywords: Field::HasMany,
    authors: Field::HasMany
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
    :date_authored,
    :reference,
    :file_path,
    :description,
    :created_at,
    :updated_at,
    :user,
    :secondary_crypto_assets,
    :authors,
    :keywords
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :id,
    :research_type,
    :source_url,
    :title,
    :date_authored,
    :reference,
    :file_path,
    :description,
    :attachment,
    :created_at,
    :updated_at,
    :user,
    :secondary_crypto_assets,
    :authors,
    :keywords
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :research_type,
    :source_url,
    :title,
    :date_authored,
    :reference,
    :file_path,
    :description,
    :attachment,
    :user,
    :secondary_crypto_assets,
    :authors,
    :keywords
  ].freeze

  # Overwrite this method to customize how researches are displayed
  # across all pages of the admin dashboard.
  #
  def display_resource(research)
    "##{research.id} #{research.title}"
  end

end
