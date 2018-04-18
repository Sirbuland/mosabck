class RoutesFilter
  #  set pages which you wanna remove from sidebar
  HIDDEN_PAGES = %w[session sessions
                    notification_configurations
                    notification_configuration
                    auth_identities/classic_identities
                    auth_identities/chat_identities
                    auth_identities/facebook_identities
                    auth_identities/twitter_identities
                    auth_identities/github_identities
                    auth_identities/google_identities].freeze

  def self.routes(admin)
    admin.resources.reject { |route| route.to_s.in?(HIDDEN_PAGES) }
  end
end
