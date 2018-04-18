class ContactMethod < ApplicationRecord
  CONTACT_METHODS_TYPES = { email: 'Email',
                            phone: 'Phone' }.freeze
  belongs_to :user

  CONTACT_METHODS_TYPES.each do |identity, type|
    scope identity, -> { where(type: type) }
  end

  scope :main, -> { where(main: true) }
end
