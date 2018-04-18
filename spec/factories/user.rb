FactoryBot.define do
  factory :user do
    after :create do |user|
      Sunspot.commit
      user.location = create(
        :location,
        locateable_type: 'User',
        locateable_id: user.id
      )
    end
    sequence(:username) { |n| "#{Faker::Name.first_name}#{n}" }
    sequence(:email)    { |n| "mail#{n}@example.com" }
    password            { Faker::Internet.password(8) }
    bio                 { Faker::ChuckNorris.fact }
    confirm_token       { SecureRandom.urlsafe_base64.to_s }
  end

  trait :with_classic_identity do
    after (:create) do |user|
      create(:auth_identity, :classic_identity, user: user)
    end
  end
end
