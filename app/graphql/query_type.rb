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
