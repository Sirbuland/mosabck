require 'dry/transaction'

module AuthenticationComponent
  module Operations
    class SignInClassic
      include Dry::Transaction

      step :process
      step :validate
      step :persist

      def process(input)
        Right(
          name: input[:name],
          email: input[:email],
          device_id: input[:deviceId],
          password: input[:password]
        )
      end

      def validate(input)
        identity = AuthIdentities::ClassicIdentity.where(
          "payload->>'email' = ? ",
          input[:email]
        ).take
        error = Left(failure)
        return error unless identity.present?
        password = BCrypt::Password.new(identity.payload['password'])
        return error unless password == input[:password]
        input[:user] = identity.user
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

      def failure
        @failure ||= {
          msg: I18n.t('signin.errors.invalid_credentials'),
          status: :invalid_credentials
        }
      end
    end
  end
end
