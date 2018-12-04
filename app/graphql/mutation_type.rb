include ApplicationHelper
MutationType = GraphQL::ObjectType.define do
  name 'Mutation'

  field :activatePin, field: MiscComponent::Mutations::ActivatePin.field
  field :createClassicUser, field: UserComponent::Mutations::ClassicUser.field
  field :createFacebookUser,
    field: UserComponent::Mutations::FacebookUser.field
  field :createOauthUser, field: UserComponent::Mutations::OauthUser.field
  field :createUser, field: UserComponent::Mutations::CreateUser.field
  field :createScreener,
    field: ScreenerComponent::Mutations::CreateScreener.field
  field :deleteScreener,
    field: ScreenerComponent::Mutations::DeleteScreener.field
  field :postFeedback, UserComponent::Mutations::PostFeedback.field
  field :signInClassic,
    field: AuthenticationComponent::Mutations::SignInClassic.field
  field :signInOauth,
    field: AuthenticationComponent::Mutations::SignInOauth.field
  field :signOut, field: AuthenticationComponent::Mutations::SignOut.field
  field :updateUser, field: UserComponent::Mutations::UpdateUser.field
  field :updateScreener,
    field: ScreenerComponent::Mutations::UpdateScreener.field
  field :updateUserInstallation,
    field: UserComponent::Mutations::UpdateUserInstallation.field
  field :updateUserPassword,
    field: UserComponent::Mutations::UpdateUserPassword.field
  field :userResetPassword,
    field: UserComponent::Mutations::UserResetPassword.field
  field :verifyEmail, field: UserComponent::Mutations::VerifyEmail.field

  field :createDashboard, field: DashboardComponent::Mutations::CreateDashboard.field
  field :updateDashboard, field: DashboardComponent::Mutations::UpdateDashboard.field
  field :createExchange, field: ExchangeComponent::Mutations::CreateExchange.field
  field :updateExchange, field: ExchangeComponent::Mutations::UpdateExchange.field
  field :createResearch, field: ResearchComponent::Mutations::CreateResearch.field
  field :createMerchant, field: MerchantComponent::Mutations::CreateMerchant.field
  field :createEvent, field: EventComponent::Mutations::CreateEvent.field
  field :createWallet, field: WalletComponent::Mutations::CreateWallet.field
  field :createCryptoAsset, field: CryptoAssetComponent::Mutations::CreateCryptoAsset.field
end
