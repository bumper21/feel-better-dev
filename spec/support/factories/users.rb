FactoryBot.define do
  factory :user do
    first_name { Faker::Name.name }
    # username   { Faker::Lorem.characters(number: 10) }
    email      { Faker::Internet.email }

  end
end