MiscComponent::Types::PinActionsEnumType = GraphQL::EnumType.define do
  name 'PinActionsEnumType'
  value 'activate_email'
  value 'activate_phone'
  value 'reset_password_phone'
  value 'reset_password_email'
end
