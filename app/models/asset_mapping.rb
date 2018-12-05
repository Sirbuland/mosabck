class AssetMapping < ApplicationRecord
  belongs_to :exchange, optional: :true
  belongs_to :research, optional: :true
  belongs_to :merchant, optional: :true
  belongs_to :event, optional: :true
  belongs_to :wallet, optional: :true
  belongs_to :video, optional: :true
  belongs_to :crypto_asset, optional: :true
end
