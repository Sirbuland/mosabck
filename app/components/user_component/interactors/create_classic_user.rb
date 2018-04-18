module UserComponent
  module Interactors
    class CreateClassicUser
      include Interactor

      def call
        args = context.args
        user = instantiate_user args
        classic_payload = UserService.payload_for_classic_identity(args)
        classic_identity =
          AuthIdentities::ClassicIdentity.new(payload: classic_payload)
        user.auth_identities << classic_identity

        if user.save
          location = GeoComponent::Interactors::GetLocationFromQuery.call(args:
            args).location
          user.location = location if location.present?
          user_service = UserService.new(user: user)
          user_service.log_in_on_device(args)
          user_service.mark_email_as_main
          context.jwt = create_token(user, args)
          send_email_to_confirm_account(user)
          context.user = user
        else
          context.fail!(message: ApplicationHelper.formatted_errors(user))
        end
      end

      def instantiate_user(args)
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

      def send_email_to_confirm_account(user)
        user.send_email_to_confirm_account
      end
    end
  end
end
