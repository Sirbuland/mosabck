class UserController < ApplicationController
  def confirm_email
    user = User.find_by_confirm_token(params[:id])
    return unless user.present?
    user.email_contact_method.update(confirmed: true)
    redirect_to redirect_url if redirect_url.present?
  end

  def sms_verify
    pin = params[:pin]
    user = User.find_by_pin(pin)
    return unless user.present?
    user.verify(pin)
  end

  private

  def redirect_url
    @redirect_url ||= AppSetting
                      .find_by_name('RedirectAfterConfirmation')
                      &.value
  end
end
