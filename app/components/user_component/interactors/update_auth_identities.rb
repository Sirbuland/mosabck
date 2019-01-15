module UserComponent
  module Interactors
    class UpdateAuthIdentities
      ALLOWED_PARAMS = {
        'AuthIdentities::FacebookIdentity': {
          facebookUserId: :facebookUserId,
          facebookAccessToken: :facebookAccessToken,
          expirationDate: :expirationDate
        },
        'AuthIdentities::ClassicIdentity': {
          email: :email,
          password: :password
        },
        'AuthIdentities::PhoneIdentity': {
          phoneNumber: :phoneNumber
        }
      }.freeze

      include Interactor
     
      def call
        user = context.user
        args = context.args
        user.auth_identities.each do |identity|
          params = ALLOWED_PARAMS[identity.type.to_sym]
          update_attr_in_identity(identity, params, args) if params.present?
        end
        unless user.auth_identities.present?
          classic_payload = UserService.payload_for_classic_identity(args)
          classic_identity =
           AuthIdentities::ClassicIdentity.new(payload: classic_payload)
          user.auth_identities << classic_identity
        end
      end

      private

      def update_attr_in_identity(identity, params, args)
        params.each do |key, value|
          val = args[value]
          next unless val.present?
          val = BCrypt::Password.create(val) if key == :password
          identity.update_attribute_inside_payload(key, val)
        end
      end
    end
  end
end
