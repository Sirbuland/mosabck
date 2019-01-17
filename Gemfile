source 'https://rubygems.org'
ruby '2.4.3'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.1'
# Use Puma as the app server
gem 'puma', '~> 3.7'

# Use postgres as the database for Active Record
gem 'pg'

gem 'dotenv'
gem 'graphiql-rails', '1.4.5'
gem 'graphql', '1.7.4'
# for handling file upload requests
gem 'apollo_upload_server', '2.0.0.beta.1'

# Graphiql Dependencies
gem 'coffee-rails'
gem 'sass-rails'
gem 'uglifier'

gem 'interactor-rails', '~> 2.2.0'
gem 'jwt'
gem 'migration_data'

gem 'activerecord-postgis-adapter'

# Admin panel
gem 'administrate', '~> 0.10.0'
gem 'administrate-field-json', github: 'eddietejeda/administrate-field-json'
# Extension of carrierwave gem to support administrate gem
gem 'administrate-field-carrierwave', '~> 0.3.4'

gem 'hamlit'

# Miscellaneous
gem 'faker'
gem 'montrose'
gem 'os'
gem 'progress_bar'
gem 'validate_url'
gem 'validates_email_format_of'
gem 'loofah', '~> 2.2.1'

# Policies
gem 'pundit'

# Chat connectors gem
gem 'chat_service_connectors',
  git: 'https://e30a0429ba9fae576e8e07cca262c52615adcc34:x-oauth-basic@github.com/SiliconValleyInsight/chat_service_connectors.git'

# Dry
gem 'dry-transaction'

# Cors
gem 'rack-cors', 'require' => 'rack/cors'

# Twilio SMS
gem 'twilio-ruby', '~> 5.6.0'

# Background tasks
gem 'capybara'
gem 'exponent-server-sdk'
gem 'poltergeist'
gem 'sidekiq'
gem 'sidekiq-scheduler'

# Password
gem 'bcrypt'

# optimize and cache expensive computations
gem 'bootsnap', require: false

# aws sdk specifically for s3 services
gem "aws-sdk-s3", require: false

#Pagination gem
gem 'will_paginate', '~> 3.1', '>= 3.1.6'

# handle ratings and vote casting logic
gem 'acts_as_votable'

# File uploading gem
gem 'carrierwave', '~> 1.0'
# Gem for image handling. Used here
# to create thumbnail images
gem 'rmagick', '~> 2.16'
# File uploading to s3
gem "fog-aws"
# handle url slugs and create seo friendly urls
gem 'friendly_id', '~> 5.2.4'
# handle auth0 authentication for admin users
gem 'omniauth', '~> 1.6.1'
gem 'omniauth-auth0', '~> 2.0.0'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'database_cleaner'
  gem 'dotenv-rails'
  gem 'factory_bot_rails'
  gem 'fasterer'
  gem 'json_matchers'
  gem 'rails_best_practices', require: false
  gem 'reek', require: false
  gem 'rspec-rails', '~> 3.5'
  gem 'rubocop', '~> 0.49.1', require: false
  gem 'shoulda-matchers', require: false
  gem 'timecop'
  gem 'better_errors'
  gem 'binding_of_caller'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console'
end

group :test do
  gem 'rspec-sidekiq'
  gem 'simplecov', require: false
  gem 'sunspot-rails-tester'
  gem 'vcr'
  gem 'webmock'
end
