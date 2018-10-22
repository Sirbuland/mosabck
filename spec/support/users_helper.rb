module UsersHelper
  def approve_email(email)
    ApprovedUser.create!(email: email).email
  end
end
