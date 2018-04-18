class UserMailer < ActionMailer::Base
  default from: ENV.fetch('SF_MAIL_ADDRESS') { 'mail@svi.com' }

  def registration_confirmation(user)
    to = user.email
    return unless user.present? && to.present?
    @user = user
    mail(to: "#{user.username} <#{to}>",
         subject: I18n.t('email.account_confirmation_subject'))
  end

  def confirmation_status(user, success)
    return unless user.present?
    @user = user
    @success = success
    mail(to: "#{user.username} <#{user.email}>",
         subject: I18n.t('email.account_confirmation_subject'))
  end

  def custom_email(username, email, body)
    html = "<h1>Hello, #{username}!</h1><p>#{body}</p>".html_safe
    text = "Hello, #{username}! #{body}"
    mail(to: email) do |format|
      format.text { render plain: text }
      format.html { render html: html }
    end
  end
end
