WalletComponent::Types::WalletType = GraphQL::ObjectType.define do
	name 'wallet'

	field :id, !types.ID
	field :name, types.String
  field :description, types.String
  field :image_link, types.String
  field :source_link, types.String

	field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(wallet, _args, _ctx) { wallet.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(wallet, _args, _ctx) { wallet.created_at }
  end

  field :user do
    type types[UserComponent::Types::UserType]
    resolve ->(wallet, _args, _ctx) { wallet.user }
  end

  field :numberMajorWallets, types.String, property: :number_major_wallets
  field :numberMobileWallets, types.String, property: :number_mobile_wallets

end
