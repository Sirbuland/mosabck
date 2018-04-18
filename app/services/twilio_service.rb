require 'twilio-ruby'
require 'logger'

class TwilioService
  def send_sms(from, to, body)
    client = Twilio::REST::Client.new
    client.api.account.messages.create(from: from, to: to, body: body)
  rescue Twilio::REST::RestError => error
    Logger.new(STDERR).error error
  end

  def send_reset_password(to, body)
    client = Twilio::REST::Client.new
    client.api.account.messages.create(from: ENV['TWILIO_FROM_NUMBER'],
                                       to: to,
                                       body: body)
  rescue Twilio::REST::RestError => error
    Logger.new(STDERR).error error
  end
end
