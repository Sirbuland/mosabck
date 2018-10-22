class AdminMailer < ActionMailer::Base
  default from: ENV.fetch('SF_MAIL_ADDRESS') { 'mail@svi.com' }

  def feedback(admin_emails, path_to_file)
    to = admin_emails.join(',')
    filename = path_to_file.split('/').last
    attachments[filename] = File.read(path_to_file)
    date = DateTime.yesterday.strftime('%m/%d')
    subject = I18n.t('email.admin.feedback', date: date)
    mail(to: to, subject: subject) do |format|
      format.text { render plain: I18n.t('email.admin.feedback_body') }
    end
  end
end
