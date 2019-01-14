QueryType = GraphQL::ObjectType.define do
  name 'Query'
  description 'The query root of this schema'

  connection :allUsers, UserComponent::Types::UserType.connection_type do
    description 'All users'
    argument :searchTerm, types.String
    argument :searchBy, types[UserComponent::Types::UserSearchByType]
    argument :orderBy, UserComponent::Types::UserOrderByType

    resolve UserComponent::Resolvers::SearchUsersResolver.new
  end

  connection :getScreeners, ScreenerComponent::Types::ScreenerType.connection_type do
    description 'returns User Screeners'
    argument :ids, types[!types.ID]

    resolve ScreenerComponent::Resolvers::GetScreenersResolver.new
  end

  connection :getDashboards, DashboardComponent::Types::DashboardType.connection_type do
    description 'returns User Dashboards'
    argument :ids, types[!types.ID]

    resolve DashboardComponent::Resolvers::GetDashboardsResolver.new
  end

  field :userEmailExist do
    type types.Boolean
    description 'Email existence'
    argument :email, types.String

    resolve ->(_obj, args, _ctx) do
      AuthIdentity.where("payload->>'email' = ? ", args[:email]).exists?
    end
  end

  field :allAuthors do
    type types[AuthorComponent::Types::AuthorType]
    resolve -> (_obj, args, _ctx) do
      Author.all
    end
  end

  connection :getAuthors,
    AuthorComponent::Types::AuthorType.connection_type do
      description 'returns User Authors'
      argument :ids, types[!types.ID]

      resolve AuthorComponent::Resolvers::GetAuthorsResolver.new
    end

  field :allDashboards do
    type types[DashboardComponent::Types::DashboardType]
    resolve -> (_obj, args, _ctx) do
      Dashboard.all
    end
  end

  field :getDashboard do
    type DashboardComponent::Types::DashboardType
    description 'Get dashboard by id'
    argument :id, !types.ID
    resolve -> (_obj, args, _ctx) do
      Dashboard.find(args[:id])
    end
  end
  
  field :allExchanges do
    type types[ExchangeComponent::Types::ExchangeType]
    resolve -> (_obj, _args, _ctx) do
      Exchange.all
    end
  end

  connection :getExchanges,
    ExchangeComponent::Types::ExchangeType.connection_type do
      description 'returns User Exchanges'
      argument :ids, types[!types.ID]

      resolve ExchangeComponent::Resolvers::GetExchangesResolver.new
    end

  field :allCryptoAssets do
    type types[CryptoAssetComponent::Types::CryptoAssetType]
    resolve -> (_obj, _args, _ctx) do 
      CryptoAsset.all
    end
  end

  connection :getCryptoAssets,
    CryptoAssetComponent::Types::CryptoAssetType.connection_type do
      description 'returns User CryptoAssets'
      argument :ids, types[!types.ID]

      resolve CryptoAssetComponent::Resolvers::GetCryptoAssetsResolver.new
    end

  field :allMerchants do
    type types[MerchantComponent::Types::MerchantType]
    resolve -> (_obj, _args, _ctx) do 
      Merchant.all
    end
  end

  connection :getMerchants,
    MerchantComponent::Types::MerchantType.connection_type do
      description 'returns User Merchant'
      argument :ids, types[!types.ID]

      resolve MerchantComponent::Resolvers::GetMerchantsResolver.new
    end

  field :allWallets do
    type types[WalletComponent::Types::WalletType]
    resolve -> (_obj, _args, _ctx) do 
      Wallet.all
    end
  end

  connection :getWallets,
    WalletComponent::Types::WalletType.connection_type do
      description 'returns User Wallet'
      argument :ids, types[!types.ID]

      resolve WalletComponent::Resolvers::GetWalletsResolver.new
    end

  field :allVideos do
    type types[VideoComponent::Types::VideoType]
    resolve -> (_obj, _args, _ctx) do 
      Video.all
    end
  end

  connection :getVideos,
    VideoComponent::Types::VideoType.connection_type do
      description 'returns User Video'
      argument :ids, types[!types.ID]

      resolve VideoComponent::Resolvers::GetVideosResolver.new
    end

  field :allResources do
    type types[ResourceComponent::Types::ResourceType]
    resolve -> (_obj, _args, _ctx) do 
      Resource.all
    end
  end

  connection :getResources,
    ResourceComponent::Types::ResourceType.connection_type do
      description 'returns User Resource'
      argument :ids, types[!types.ID]
      
      resolve ResourceComponent::Resolvers::GetResourcesResolver.new
    end

  connection :allResearches, ResearchComponent::Types::ResearchType.connection_type do
    description 'All researches'
    argument :searchTerm, types.String
    argument :searchBy, types[ResearchComponent::Types::ResearchSearchByType]
    argument :orderBy, types.String

    resolve ResearchComponent::Resolvers::SearchResearchesResolver.new
  end

  connection :getResearches,
    ResearchComponent::Types::ResearchType.connection_type do
      description 'returns User Research'
      argument :searchBy, types[ResearchComponent::Types::ResearchSearchByType]
      argument :ids, types[!types.ID]
      
      resolve ResearchComponent::Resolvers::GetResearchesResolver.new
    end

  field :getResearch do
    type ResearchComponent::Types::ResearchType
    description 'returns Researh by given column'
    argument :findBy, types.String
    argument :findValue, types.String

    resolve ResearchComponent::Resolvers::FindResearchResolver.new
  end

  connection :getNewsFilters,
    NewsFilterComponent::Types::NewsFilterType.connection_type do
      description 'returns User NewsFilter'
      argument :searchBy, types[NewsFilterComponent::Types::NewsFilterSearchByType]
      
      resolve NewsFilterComponent::Resolvers::GetNewsFiltersResolver.new
    end

  field :allKeywords do
    type types[KeywordComponent::Types::KeywordType]
    resolve -> (_obj, _args, _ctx) do 
      Keyword.all
    end
  end

  connection :getKeywords,
    KeywordComponent::Types::KeywordType.connection_type do
      description 'returns User Keyword'
      argument :ids, types[!types.ID]
      
      resolve KeywordComponent::Resolvers::GetKeywordsResolver.new
    end

  field :allPersons do
    type types[PersonComponent::Types::PersonType]
    resolve -> (_obj, _args, _ctx) do 
      Person.all
    end
  end

  connection :getPersons,
    PersonComponent::Types::PersonType.connection_type do
      description 'returns User Person'
      argument :ids, types[!types.ID]
      
      resolve PersonComponent::Resolvers::GetPersonsResolver.new
    end

  field :allEvents do
    type types[EventComponent::Types::EventType]
    resolve -> (_obj, _args, _ctx) do 
      Event.all
    end
  end

  connection :getEvents,
    EventComponent::Types::EventType.connection_type do
      description 'returns User Event'
      argument :ids, types[!types.ID]
      
      resolve EventComponent::Resolvers::GetEventsResolver.new
    end

  field :userNameExistenceAndSuggestions do
    type UserComponent::Types::UsernameType
    description 'Username availability and suggestions'
    argument :username, types.String

    resolve UserComponent::Resolvers::UsernameResolver.new
  end

  field :viewer do
    type UserComponent::Types::ViewerType
    description 'Viewer (current user)'

    resolve UserComponent::Resolvers::ViewerResolver.new
  end

  # Load identities inside the schema
  AuthIdentity::IDENTITY_TYPES.values.each do |type|
    classified_type = type.classify
    field "all#{classified_type.pluralize}".to_sym do
      type types[
        "IdentitiesComponent::Types::#{classified_type}Type".constantize]
      description "All #{type.humanize.pluralize}"
      resolve ->(_root, _args, _ctx) {
        AuthIdentity.where(identity_type: type)
      }
    end
  end

  connection :appSettings,
    MiscComponent::Types::AppSettingType.connection_type do
      description 'App settings defined by admins'
      argument :name, types.String

      resolve AppSettingsComponent::Resolvers::AppSettingsResolver.new
    end

  field :validatePin do
    type types.Boolean
    description 'Checks if the pin is valid for the phone/email'
    argument :phoneNumber, types.String
    argument :email, types.String
    argument :pinNumber, !types.String

    resolve UserComponent::Resolvers::ValidatePinResolver.new
  end

  field :ErrorStatusEnum do
    type MiscComponent::Types::ErrorStatusEnumType
    description 'Available error statuses in response'
    resolve ->(_root, _args, _ctx) { nil }
  end

end
