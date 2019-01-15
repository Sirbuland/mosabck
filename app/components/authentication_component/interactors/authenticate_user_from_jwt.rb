module AuthenticationComponent
  module Interactors
    class AuthenticateUserFromJwt
      include Interactor

      def call
        payload_info = context.jwt_payload
        msg = I18n.t('errors.messages.not_found', entity: 'Payload')
        context.fail!(message: msg) unless payload_info.present?
        username = payload_info['email']
        user     = User.find_by(username: username)
        if user.present?
          user = user.first if user.is_a? Array
          user_device = user.user_devices.first
        else
          payload = UserService.payload_for_classic_identity(
            email: payload_info['email'], password: payload_info['password'])
          identity = AuthIdentities::ClassicIdentity.create(payload: payload)
          user = User.create(username: username)
          user.user_devices << UserDevice.create(device_id: 123)
          user.auth_identities << identity
          user_device = user.user_devices.first
        end

        context.current_user = user
        context.current_device = user_device
      end
    end
  end
end
