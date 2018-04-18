FactoryBot.define do
  factory :auth_identity do
  end

  trait :facebook_identity do
    user_name =   "#{Faker::Name.first_name}_FB"
    type          { AuthIdentities::FacebookIdentity.to_s }
    payload       { JSON.parse("{\"facebookUserId\":\"#{user_name}\",\"facebookAccessToken\":\"#{user_name}FAKEFBTOKEN\",\"expirationDate\":null}") }
  end

  trait :classic_identity do
    type          { AuthIdentities::ClassicIdentity.to_s }
    payload       do
      email = Faker::Internet.email
      JSON.parse("{\"email\":\"#{email}\",\"password\":\"#{Faker::Internet.password}\",\"email_confirmed\":\"#{email}\"}")
    end
  end

  trait :phone_identity do
    type          { AuthIdentities::PhoneIdentity.to_s }
    payload       { JSON.parse("{\"phoneNumber\":\"#{Faker::PhoneNumber.phone_number}\"}") }
  end
end
