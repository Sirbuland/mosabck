class AdminAccessPolicy < ApplicationPolicy
  def access?
    user.role? :admin
  end
end
