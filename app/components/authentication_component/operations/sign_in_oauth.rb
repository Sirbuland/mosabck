require 'dry/transaction'

module AuthenticationComponent
  module Operations
    class SignInOauth
      include Dry::Transaction

      step :process
      step :validate
      step :persist

      def process(input)
        Right(
          oauth_user_id: input[:oauthUserId],
          oauth_token: input[:oauthToken],
          user_type: input[:userType],
          device_id: input[:deviceId]
        )
      end

      def validate(input)
        type = GraphqlHelper::OAUTH_USER_TYPES.invert[input[:user_type]]
        where_clause = "payload->>'#{type}UserId' = ?"
        identity = AuthIdentity.public_send(type)
                               .where(where_clause,
                                      input[:oauth_user_id])
                               .eager_load(:user).first
        return fail_with_not_found unless identity.present?
        user = identity.user
        return fail_with_not_found unless user.present?
        input[:user] = user
        Right(input)
      end

      def persist(input)
        user = input[:user]
        device_id = input[:device_id]
        UserService.new(user: user).login_user_on_device(device_id)
        jwt_token = JWT.encode(
          {
            user_id: user.id,
            iss: 'mosaic',
            aud: 'client',
            device_id: device_id
          },
          Rails.application.secrets.secret_key_base
        )
        input[:jwt] = jwt_token
        Right(input)
      end

      private

      def fail_with_not_found
        Left(I18n.t('errors.messages.not_found', entity: 'User'))
      end
    end
  end
end
