require 'json_web_token'

module Admin
  class SessionController < ActionController::Base
    skip_before_action :verify_authenticity_token

    include LogoutHelper
    include Pundit

    def login
      return unless request.post?
      current_params = params.permit!
      result = AuthenticationComponent::Interactors::AuthenticateUser
               .call(current_params)
      if result.success?
        token = valid_jwt_token(result.user.id, nil)
        session[:token] = token
        authorize :admin_access, :access?
        flash_message(t('auth.successful'))
        redirect_to admin_root_path
      else
        flash_message(result.message)
        render status: 404
      end
    end

    def logout
      reset_session
      redirect_to logout_url.to_s
    end

    private

    def login_params
      params.permit(:email, :password)
    end

    def flash_message(message)
      flash.now[:message] = message
    end

    def valid_jwt_token(user_id, device_id)
      jwt_token_payload = { user_id: user_id,
                            iss: 'mosaic',
                            aud: 'client',
                            device_id: device_id }
      JWT.encode(jwt_token_payload, Rails.application.secrets.secret_key_base)
    end

    def current_user
      token = session[:token]
      if token.present?
        data = JsonWebToken.secret_key_decode(token).first
        @user = User.find(data['user_id'])
      end
      @user
    end
  end
end
