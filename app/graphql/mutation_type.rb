include ApplicationHelper
MutationType = GraphQL::ObjectType.define do
  name 'Mutation'

  field :createClassicUser, field: UserComponent::Mutations::ClassicUser.field
  field :createFacebookUser,
    field: UserComponent::Mutations::FacebookUser.field
  field :createOauthUser, field: UserComponent::Mutations::OauthUser.field
  field :createUser, field: UserComponent::Mutations::CreateUser.field
  field :signInClassic,
    field: AuthenticationComponent::Mutations::SignInClassic.field
  field :signInOauth,
    field: AuthenticationComponent::Mutations::SignInOauth.field
  field :signOut, field: AuthenticationComponent::Mutations::SignOut.field
  field :updateUser, field: UserComponent::Mutations::UpdateUser.field
  field :updateUserInstallation,
    field: UserComponent::Mutations::UpdateUserInstallation.field
  field :updateUserPassword,
    field: UserComponent::Mutations::UpdateUserPassword.field
  field :userResetPassword,
    field: UserComponent::Mutations::UserResetPassword.field
  field :verifyEmail, field: UserComponent::Mutations::VerifyEmail.field
end
