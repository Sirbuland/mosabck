module UserComponent
  module Interactors
    class CreateOauthUser
      include Interactor

      def call
        args = context.args
        user = hidrate_user args
        user_type = args[:userType]
        user_payload =
          UserService.send("payload_for_#{user_type.underscore}", args)
        oauth_identity =
          "AuthIdentities::#{user_type}".constantize
                                        .new(payload: user_payload)
        user.auth_identities << oauth_identity

        if user.save
          location = GeoComponent::Interactors::GetLocationFromQuery.call(args:
            args).location
          user.location = location if location.present?
          UserService.new(user: user).log_in_on_device(args)
          context.jwt = create_token(user, args)
          context.user = user
        else
          context.fail!(message: ApplicationHelper.formatted_errors(user))
        end
      end

      def hidrate_user(args)
        User.new(username: args[:displayName],
                 first_name: args[:firstName],
                 last_name: args[:lastName],
                 bio: args[:bio],
                 email: args[:email],
                 password: args[:password],
                 avatar_url: args[:avatarUrl],
                 backgound_img_url: args[:backgroundImageUrl],
                 subscribed_to_newsletter: args[:subscribedToNewsLetter],
                 birthdate: args[:birthdate])
      end

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
