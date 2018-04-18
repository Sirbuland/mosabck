module AuthenticationComponent
  module Interactors
    class AuthenticateUser
      include Interactor

      def call
        identity = AuthIdentities::ClassicIdentity.where(
          "payload->>'email' = ? ",
          context.email
        ).take
        if identity.present?
          payload_pwd = identity.payload['password']
          if BCrypt::Password.new(payload_pwd) == context.password
            context.user = identity.user
          else
            fail_with_not_found
          end
        else
          fail_with_not_found
        end
      end

      private

      def fail_with_not_found
        context.fail!(message: 'User not found')
      end
    end
  end
end
