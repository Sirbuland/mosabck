WalletComponent::Types::WalletType = GraphQL::ObjectType.define do
	name 'wallet'

	field :id, !types.ID
	field :name, types.String
  field :description, types.String
  field :imageLink, types.String, property: :image_link
  field :sourceLink, types.String, property: :source_link
  field :entryDate, types.String, property: :entry_date

	field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(wallet, _args, _ctx) { wallet.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(wallet, _args, _ctx) { wallet.created_at }
  end

  field :userId do
    type types.ID
    resolve ->(wallet, _args, _ctx) { wallet.user_id }
  end

  field :numberMajorWallets, types.String, property: :number_major_wallets
  field :numberMobileWallets, types.String, property: :number_mobile_wallets

end
