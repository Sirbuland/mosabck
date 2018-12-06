class AddressTracker < ApplicationRecord
  include AssetMappingLinkage
  belongs_to :user
end
