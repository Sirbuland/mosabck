MiscComponent::Types::AppSettingType = GraphQL::ObjectType.define do
  name 'AppSetting'

  field :id, !types.ID
  field :name, types.String
  field :value, types.String
  field :active, types.Boolean

  field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(app_setting, _args, _ctx) { app_setting.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(app_setting, _args, _ctx) { app_setting.created_at }
  end
end
