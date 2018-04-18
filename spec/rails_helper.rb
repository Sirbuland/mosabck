# This file is copied to spec/ when you run 'rails generate rspec:install'
ENV['RAILS_ENV'] ||= 'test'
require 'spec_helper'
require File.expand_path('../../config/environment', __FILE__)
require 'rspec/rails'
require 'shoulda/matchers'
require 'factory_bot_rails'
require 'json_matchers/rspec'

Dir[Rails.root.join('spec/support/**/*.rb')].each { |f| require f }
ActiveRecord::Migration.maintain_test_schema!

require 'simplecov'

$original_sunspot_session = Sunspot.session
Sunspot::Rails::Tester.start_original_sunspot_session
# allowing solr http calls
WebMock.disable_net_connect!(allow_localhost: true)

# save to CircleCI's artifacts directory if we're on CircleCI
if ENV['CIRCLE_ARTIFACTS']
  dir = File.join(ENV['CIRCLE_ARTIFACTS'], 'coverage')
  SimpleCov.coverage_dir(dir)
end

SimpleCov.start

RSpec.configure do |config|
  config.include FactoryBot::Syntax::Methods
  config.include RequestHelpers
  config.include GraphqlQueriesHelper

  config.fixture_path = "#{::Rails.root}/spec/fixtures"
  config.use_transactional_fixtures = true
  config.infer_spec_type_from_file_location!
  config.filter_rails_from_backtrace!
  config.before(:suite) do
    DatabaseCleaner.clean_with(:truncation)
  end

  config.before :each do
    manage_solr_server
  end

  def manage_solr_server
    # uncomment below line to stub Solr session, Ale.
    # Sunspot.session = Sunspot::Rails::StubSessionProxy.new($original_sunspot_session)
    Sunspot.session = $original_sunspot_session
    begin
    Sunspot.remove_all!
    rescue RSolr::Error::Http
      sleep 1 && retry
    end
  end
end

Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :rails
  end
end
