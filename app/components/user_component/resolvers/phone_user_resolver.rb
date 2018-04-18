module UserComponent
  module Resolvers
    class PhoneUserResolver
      # TODO: refactor me on user create refactor
      def call(_obj, args = ApplicationHelper.h_and_sym(args), ctx)
        user = User.new(username: args[:displayName],
                        bio: args[:bio],
                        email: args[:email],
                        password: args[:password])
        phone_payload = UserService.payload_for_phone_identity(args)
        phone_identity =
          AuthIdentities::PhoneIdentity.new(payload: phone_payload)
        user.auth_identities << phone_identity

        if user.save
          location = GeoComponent::Interactors::GetLocationFromQuery.call(args:
            args).location
          user.location = location if location.present?
          UserService.new(user: user).log_in_on_device(args)
          jwt = create_token(user, args)
          { user: user, jwt: jwt }
        else
          formatted_error = ApplicationHelper.formatted_errors(user)
          ctx.add_error(GraphqlHelper.execution_error(formatted_error))
        end
      end

      private

      def create_token(user, args)
        JWT.encode(
          {
            user_id: user.id,
            iss: 'mosaic',
            aud: 'client',
            device_id: args[:deviceId]
          },
          Rails.application.secrets.secret_key_base
        )
      end
    end
  end
end
