class AssetMapping < ApplicationRecord
  belongs_to :exchange
  belongs_to :research
  belongs_to :merchant
  belongs_to :event
  belongs_to :wallet
  belongs_to :video
  belongs_to :crypto_asset
end
