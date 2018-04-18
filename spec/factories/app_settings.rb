FactoryBot.define do
  factory :app_setting do
    name   { Faker::App.name }
    value  { Faker::App.version }
    active { true }
  end
end
