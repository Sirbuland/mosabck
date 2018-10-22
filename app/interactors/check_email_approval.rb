class CheckEmailApproval
  include Interactor

  def call
    email = context.email
    context.fail! unless ApprovedUser.where(email: email).exists?
  end
end
