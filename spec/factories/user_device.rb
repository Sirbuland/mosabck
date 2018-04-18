FactoryBot.define do
  factory :user_device do
    user      { create :user }
    logged_in { [true, false].sample }
    device_id { Faker::Code.imei }
  end
end
