UserComponent::Types::UserType = GraphQL::ObjectType.define do
  name 'User'

  interfaces [GeoComponent::Types::GeoTaggableType]

  field :id, !types.ID
  field :userChatId do
    type types.String
    resolve ->(user, _args, _ctx) { user.chat_user_id }
  end
  field :bio, types.String
  field :displayName, types.String, property: :username
  field :firstName, types.String, property: :first_name
  field :lastName, types.String, property: :last_name
  field :usernameChat do
    type types.String
    resolve ->(user, _args, _ctx) { user.chat_username }
  end
  field :email, types.String
  field :password, types.String
  field :avatarUrl, types.String, property: :avatar_url
  field :backgroundImageUrl, types.String, property: :backgound_img_url
  field :subscribedToNewsLetter, types.Boolean,
    property: :subscribed_to_newsletter
  field :birthdate, MiscComponent::Types::DateTimeType

  field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(user, _args, _ctx) { user.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(user, _args, _ctx) { user.created_at }
  end

  field :identities do
    type types[IdentitiesComponent::Types::AuthIdentityType]
    resolve ->(user, _args, _ctx) { user.auth_identities }
  end

  connection :installations,
    MiscComponent::Types::InstallationType.connection_type do
    resolve ->(user, _args, _ctx) {
      user.installations
    }
  end

  field :sex, MiscComponent::Types::SexEnumType do
    resolve ->(user, _args, _ctx) { user.sex.titleize.gsub(/\W+/, '') }
  end
end
