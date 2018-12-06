class AddCryptoAssetIdInResearch < ActiveRecord::Migration[5.1]
  def change
  	add_reference :researches, :crypto_asset, index: true
  end
end
