FactoryBot.define do
  factory :feedback do
    message { Faker::Hobbit.quote }
    user { create :user }
  end
end
