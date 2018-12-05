# All Administrate controllers inherit from this
# `Admin::ApplicationController`,
# making it the ideal place to put authentication logic or other
# before_actions.
#
# If you want to add pagination or other controller-level concerns,
# you're free to overwrite the RESTful controller actions.

require 'json_web_token'
require 'routes_filter'

module Admin
  class ApplicationController < Administrate::ApplicationController
    before_action :authenticate_admin

    def authenticate_admin
      token = session[:token]
      if token.present?
        user_id = JsonWebToken.secret_key_decode(token).first.fetch('user_id')
        user = User.find_by_id(user_id)
        redirect_to_login unless user.present?
      else
        redirect_to_login
      end
    end

    def destroy
      if requested_resource.respond_to?(:hidden)
        requested_resource.update(hidden: true)
      else
        requested_resource.destroy
      end
      flash[:notice] = translate_with_resource('destroy.success')
      redirect_to action: :index
    end

    private

    def redirect_to_login
      redirect_to(admin_session_login_path)
    end

    # Override this value to specify the number
    # of elements to display at a time
    # on index pages. Defaults to 20.
    # def records_per_page
    #   params[:per_page] || 20
    # end
  end
end
