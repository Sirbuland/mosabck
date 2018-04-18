require 'erb'

module GraphqlQueriesHelper
  QUERY_FILES_PATH = 'spec/support/grahpql_query_files/'.freeze

  def sign_in_mutation_facebook(oauth_user_id, oauth_token, device_id)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def create_user_mutation(params)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def sign_in_mutation_classic(email, password, device_id)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def sign_in_mutation_twitter(oauth_user_id, oauth_token, device_id)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def sign_in_mutation_with_vars
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def sign_in_mutation_no_device_id(email, password)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def sign_out_mutation
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def all_users_query
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def create_classic_identity_mutation(name, email, password, bio, device_id, avatar_url)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def create_classic_identity_suscribed_mutation(name, email, password, bio, device_id, avatar_url, suscribed)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def create_classic_identity_phone_number_mutation(name, email, password, device_id, phone_number)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def create_classic_identity_birthdate_mutation(name, email, password, device_id, birthdate)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def create_facebook_identity_mutation(name, bio, fb_user_id, fb_access_token, expiration_date, device_id)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def create_phone_identity_mutation(name, email, password, bio, phone_number, device_id, geo = '')
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def update_user_mutation_phone_identity_example(id, name, email, phone_number, location = nil)
    geo_meta = location.nil? ? '' : ", geoMeta: {
      latitude: #{location.lonlat.y},
      longitude: #{location.lonlat.x},
      country: \"#{location.country}\",
      countryCode: \"#{location.countryCode}\",
      city: \"#{location.city}\",
      zip: \"#{location.zip}\",
      street: \"#{location.street}\",
      streetNumber: \"#{location.streetNumber}\",
      timeZone: \"#{location.timeZone}\"}"
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def viewer_query
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def viewer_query_other_user(user_id)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def all_geo_taggable_query(types, coords)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def search_users(search_term)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def search_users_with_search_by(search_term, search_by)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def update_user_avatar_and_birthdate_mutation(id, avatar_url, birthdate)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def update_user_sex(id, sex)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def all_users_alphabetically
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def create_order(user_id, subscription_id)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def existing_emails_query(email)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def update_password_mutation(id, old_password, new_password)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def update_password_mutation_pin(pin_number, phone_number, old_password, new_password)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def update_password_mutation_email(pin_number, email, old_password, new_password)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def create_oauth_identity_mutation(device_id, display_name, bio, user_type, oauth_user_id, oauth_access_token)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def username_query(username)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def update_user_installation_mutation(user_id, token, token_type, device_type, app_version)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def app_settings_by_name_query(name)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def app_settings_query
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def create_user_with_avatar_url
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def update_user_from_client(params)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def sms_password_reset_mutation(user_id, channel = 'PHONE')
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def sms_password_reset_mutation_by_phone(phone_number, channel = 'PHONE')
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def sms_password_reset_mutation_by_email(email, channel = 'PHONE')
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def activate_pin(pin_code, new_password = '')
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def validate_pin(phone_number, pin_code)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def validate_pin_email(email, pin_code)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def user_reset_password_phone_mutation(phone_number)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def user_reset_password_email_mutation(email)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  def verify_email(pin_code, email)
    ERB.new(template_query_or_mutation(__method__.to_s)).result(binding)
  end

  private

  def template_query_or_mutation(name)
    File.open(Rails.root.join("#{QUERY_FILES_PATH}#{name}.erb"), 'rb', &:read)
  end
end
