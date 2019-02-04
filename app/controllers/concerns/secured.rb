module Secured
  extend ActiveSupport::Concern

  included do
  	include LogoutHelper
  	
    before_action :logged_in_using_omniauth?
  end

  def logged_in_using_omniauth?
    redirect_to '/auth/auth0' unless session[:userinfo].present?
  end

  def verify_authorized_users
  	unless UserHelper::AUTHORISED_USER_EMAILS.include? session["userinfo"]["extra"]["raw_info"]["name"]
  		reset_session
  		redirect_to logout_url.to_s
		end
  end
end
