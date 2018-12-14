FactoryBot.define do
  factory :coin do
    title { "MyString" }
    value { "MyString" }
    selected { false }
    dashboard { nil }
  end
end
