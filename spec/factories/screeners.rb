FactoryBot.define do
  factory :screener do
    name { Faker::Hobbit.character }
    text { Faker::Hobbit.quote }
    user { create :user }
  end

  trait :with_filters do
    filters do
      Random.rand(1..5).times.map do
        {
          name: ScreenerComponent::Types::FilterNameEnumType.values.keys.sample,
          operator: ScreenerComponent::Types::FilterOperatorEnumType.values.keys.sample,
          category: Faker::LordOfTheRings.character,
          value: Faker::LordOfTheRings.character
        }
      end
    end
  end
end
