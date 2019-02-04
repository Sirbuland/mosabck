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
    skip_before_action :verify_authenticity_token

    # Auth0 concern for authentication of user
    include Secured

    before_action :verify_authorized_users

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
    
  end
end
