FactoryBot.define do
  factory :pin_code do
    user
    expiration_date "2018-02-06"
    action "approve_phone"
    value { Faker::Number.number(10) }
  end
end
