UserComponent::Types::Inputs::UpdateUserInstallationInputType =
  GraphQL::InputObjectType.define do
    name 'UpdateUserInstallationInput'
    description 'Properties for user installation updating'

    argument :userId, !types.ID
    argument :token, !types.String
    argument :deviceType, !MiscComponent::Types::DeviceTypeType
    argument :appVersion, !types.String
  end
