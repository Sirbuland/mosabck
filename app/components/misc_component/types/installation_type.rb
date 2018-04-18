MiscComponent::Types::InstallationType = GraphQL::ObjectType.define do
  name 'InstallationType'

  field :id, !types.ID
  field :user, UserComponent::Types::UserType do
    resolve ->(installation, _args, _ctx) { installation.user }
  end
  field :deviceType, MiscComponent::Types::DeviceTypeType do
    resolve ->(installation, _args, _ctx) { installation.device_type }
  end
  field :appVersion, types.String, property: :app_version
  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(installation, _args, _ctx) { installation.created_at }
  end
end
