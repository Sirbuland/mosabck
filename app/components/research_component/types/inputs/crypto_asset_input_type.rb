ResearchComponent::Types::Inputs::CryptoAssetInputType =
  GraphQL::InputObjectType.define do
    name 'CryptoAssetInput'

    argument :name,          types.String
    argument :attribute1,   types.String
    argument :attribute2,   types.String

  end
