class CheckJwtRequired
  include Interactor
  CREATE_USER_MUTATIONS = %w[createClassicUser
                             createFacebookUser
                             createPhoneUser
                             createUser
                             createOauthUser
                             signInClassic
                             signInOauth
                             resetPassword].freeze
  JWT_NOT_REQUIRED_QUERIES = %w[userEmailExist
                                userNameExistanceAndSuggestions
                                userResetPassword
                                validatePin
                                updateUserPassword].freeze

  def call
    query = context.query
    referrer = context.referrer
    unless query.present?
      context.fail!(message: I18n.t('errors.messages.no_element_provided',
        element: 'query'))
    end
    if referrer.nil?
      context.fail!(message: I18n.t('errors.messages.no_element_provided',
        element: 'referrer'))
    end
    context.jwt_required = !not_required(query, referrer)
  end

  def not_required(query, referrer)
    sign_in_mutation?(query) ||
      create_mutation?(query) ||
      special_referrer?(referrer) ||
      jwt_not_required_query(query)
  end

  private

  def sign_in_mutation?(query)
    sign_in_mutations = %w[signIn signInOauth signInClassic]
    its_sign_in = false
    sign_in_mutations.each do |current|
      its_sign_in = true if query.include?(current)
    end
    query.include?('mutation') && its_sign_in
  end

  def create_mutation?(query)
    create_mutations = Regexp.union(CREATE_USER_MUTATIONS)
    query.include?('mutation') && query.match?(create_mutations)
  end

  def special_referrer?(referrer)
    referrer.include?('graphiql') || referrer.include?('voyager')
  end

  def jwt_not_required_query(query)
    JWT_NOT_REQUIRED_QUERIES.each do |query_name|
      return true if query.include?(query_name)
    end
    false
  end
end
