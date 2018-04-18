# encoding: utf-8

module RequestHelpers
  def response_body
    JSON.parse(response.body)
  end

  def response_body_errors
    response_body['errors']
  end

  def response_body_data(key = '')
    key.present? ? response_body['data'][key] : response_body
  end

  def valid_jwt_token(user_id, device_id)
    jwt_token_payload = { user_id: user_id,
                          iss: 'mosaic',
                          aud: 'client',
                          device_id: device_id }
    jwt_token = JWT.encode(jwt_token_payload,
      Rails.application.secrets.secret_key_base)
    jwt_token
  end

  def signed_in_user_token
    user = create :user
    create :auth_identity, :classic_identity, user: user
    user_device = create :user_device, user: user, logged_in: true
    valid_jwt_token user.id, user_device.device_id
  end
end
