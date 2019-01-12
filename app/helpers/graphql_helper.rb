# frozen_string_literal: true

module GraphqlHelper
  ORDER_BY_FIELDS = { created_at_asc: 'createdAt_ASC',
                      created_at_desc: 'createdAt_DESC',
                      updated_at_asc: 'updatedAt_ASC',
                      updated_at_desc: 'updatedAt_DESC',
                      display_name_alph: 'displayName_alph',
                      date_authored: 'dateAuthored_DESC',
                      cached_votes_total: 'cachedVotesTotal_DESC'
                    }.freeze
  ORDER_BY_FIELDS_TRANSLATIONS = { createdAt_ASC: 'created_at ASC',
                                   createdAt_DESC: 'created_at DESC',
                                   updatedAt_ASC: 'updated_at ASC',
                                   updatedAt_DESC: 'updated_at DESC',
                                   display_name_alph: 'username' }.freeze
  ACTIVITY_TYPES_FILTER = { posts: 'Posts',
                            likes: 'Likes',
                            comments: 'Comments',
                            tags: 'Tags' }.freeze
  USER_SEARCH_BY = { username: 'displayName',
                     email: 'email',
                     first_name: 'firstName',
                     last_name: 'lastName' }.freeze
  RESEARCH_SEARCH_BY = {
                        date_authored: 'date_authored',
                        research_type: 'research_type' }.freeze
  NEWS_FILTER_SEARCH_BY = {
                            name: 'name'
                          }.freeze
  RESEARCH_FIND_BY = {
                        slug: 'slug'
                     }.freeze
  USER_SEARCH_BY_TRANSLATIONS = { displayName: :username,
                                  email: :email }.freeze
  GEO_TAGGED_TYPES_FILTER = {
    text_posts: 'TextPosts',
    image_posts: 'ImagePosts',
    offer_service_posts: 'OfferServicePosts',
    all_posts: 'Post',
    user: 'User'
  }.freeze
  FOLLOW_TYPES_FILTER = {
    users: 'Users'
  }.freeze
  OAUTH_USER_TYPES = {
    facebook: 'FacebookIdentity',
    google: 'GoogleIdentity',
    twitter: 'TwitterIdentity',
    github: 'GithubIdentity'
  }.freeze
  PRIVACY = {
    private: 'PRIVATE',
    public: 'PUBLIC',
    all: 'ALL'
  }.freeze
  CHANNEL_SORT = {
    name: 'NAME',
    msgs: 'NUMBER_OF_MESSAGES'
  }.freeze
  PUSH_NOTIFICATIONS_TOKEN_TYPE = {
    gcm: 'GCM',
    apns: 'APNS',
    expo: 'EXPO'
  }.freeze
  ERROR_STATUSES = {
    invalid_credentials: 'INVALID_CREDENTIALS',
    unprocessable_entity: 'UNPROCESSABLE_ENTITY',
    not_found: 'NOT_FOUND',
    unauthorized: 'UNAUTHORIZED'
  }.freeze

  def self.add_error(ctx, msg, status)
    ctx.add_error(execution_error(msg, status))
  end

  def self.execution_error(args = {})
    args = { msg: args } if args.is_a? String

    GraphQL::ExecutionError.new(
      args[:msg],
      options: {
        status: GraphqlHelper::ERROR_STATUSES[args[:status]],
        attr: args[:attr]
      }
    )
  end
end
