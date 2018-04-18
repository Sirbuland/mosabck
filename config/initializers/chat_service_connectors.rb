ChatServiceConnectors.configure do |config|
  config.provider = 'rocketchat'
  config.chat_server_url = ENV['CHAT_SERVER_URL']
end
