FactoryBot.define do
  factory :attachment do
    name { "MyString" }
    attached_file { "MyString" }
    description { "MyText" }
    attachable_type { "MyString" }
    attachable_id { nil }
  end
end
