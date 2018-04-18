class AdminAccessPolicy < ApplicationPolicy
  def access?
    user.rules['admin_panel']
  end
end
