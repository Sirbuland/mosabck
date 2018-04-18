module AuthenticationComponent
  module Interactors
    class AuthenticateUserFromJwt
      include Interactor

      def call
        payload_info = context.jwt_payload
        msg = I18n.t('errors.messages.not_found', entity: 'Payload')
        context.fail!(message: msg) unless payload_info.present?
        user_id = payload_info['user_id']
        device_id = payload_info['device_id']
        user = User.find_by(id: user_id)
        if user.present?
          user_device = user.user_devices.find_by(device_id: device_id)
          logged = user.own_device?(device_id) &&
                   user_device.present? && user_device.logged_in?
          if logged
            context.current_user = user
            context.current_device = user_device
          else
            error_msg = I18n.t('errors.messages.user_not_logged_on_device')
            context.fail!(message: error_msg)
          end
        else
          error_msg = I18n.t('errors.messages.not_found', entity: 'User')
          context.fail!(message: error_msg)
        end
      end
    end
  end
end
