CarrierWave.configure do |config|

  config.fog_provider = 'fog/aws'
  # For testing, upload files to local tmp folder.
  if Rails.env.test? || Rails.env.development?
    config.storage = :file
    config.root = Rails.root
  elsif Rails.env.production?
    config.root =  Rails.root
  elsif Rails.env.staging?
    config.root = Rails.root
    config.storage = :file
  end

  config.fog_credentials = {
    provider:              'AWS',                    # required
    aws_access_key_id:     ENV['AWS_ACCESS_KEY'],    # required unless using use_iam_profile
    aws_secret_access_key: ENV['AWS_SECRET_KEY'],    # required unless using use_iam_profile
    region:                'us-east-1'               # optional, defaults to 'us-east-1'
  }

  config.fog_directory  = 'io-mosaic-data-backend'                              # required
  config.fog_public     = false                                                 # optional, defaults to true
  config.fog_attributes = { cache_control: "public, max-age=#{365.days.to_i}" } # optional, defaults to {}
end
