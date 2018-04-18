require 'json_web_token'

module MiscComponent
  module Interactors
    class ValidateJWT
      include Interactor
      def call
        error_msg = I18n.t('errors.messages.invalid_jwt')
        decoded_payload = decode_jwt_payload(context.headers)
        valid = decoded_payload && JsonWebToken.valid_payload(decoded_payload)
        context.fail!(message: error_msg) unless valid
        context.jwt_payload = decoded_payload
      rescue
        context.fail!(message: error_msg)
      end

      def decode_jwt_payload(headers)
        auth_header = headers['Authorization']
        token = auth_header.split(' ').last
        decoded = JsonWebToken.decode(token)
        decoded.first
      end
    end
  end
end
