module UserComponent
  module Resolvers
    class FacebookUserResolver
      def call(_obj, args = ApplicationHelper.h_and_sym(args), ctx)
        warn_msg = 'facebookUser is deprecated, use createOauthUser instead!'
        ActiveSupport::Deprecation.warn(warn_msg)
        user = hydrate_user(args)
        fb_payload = UserService.payload_for_facebook_identity(args)
        fb_identity = AuthIdentities::FacebookIdentity.new(payload: fb_payload)
        user.auth_identities << fb_identity

        if user.save
          location = GeoComponent::Interactors::GetLocationFromQuery.call(args:
            args).location
          user.location = location if location.present?
          UserService.new(user: user).log_in_on_device(args)
          { user: user }
        else
          formatted_error = ApplicationHelper.formatted_errors(user)
          ctx.add_error(GraphqlHelper.execution_error(formatted_error))
        end
      end

      def hydrate_user(args)
        User.new(username: args[:displayName],
                 first_name: args[:firstName],
                 last_name: args[:lastName],
                 bio: args[:bio],
                 email: args[:email],
                 password: args[:password],
                 avatar_url: args[:avatarUrl],
                 backgound_img_url: args[:backgroundImageUrl])
      end
    end
  end
end
