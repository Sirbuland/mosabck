class Wallet < ApplicationRecord
  include AssetMappingLinkage
  
  belongs_to :user
end
