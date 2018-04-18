FactoryBot.define do
  factory :location do
    lonlat { "POINT(#{Faker::Address.longitude} #{Faker::Address.latitude})" }
    country { Faker::Address.country }
    countryCode { Faker::Address.country_code }
    city { Faker::Address.city }
    street { Faker::Address.street_name }
    streetNumber { Faker::Address.street_address }
    zip { Faker::Address.zip_code }
    timeZone { Faker::Address.time_zone }
    locateable_type 'Post'
    locateable_id { create(:post, :text, user: create(:user)).id }
  end
end
