FactoryBot.define do
  factory :user do
    first_name { Faker::Name.name }
    username   { Faker::Name.name.downcase.tr('', '_') }
    email      { Faker::Internet.email }
    password   { "supersecret" }

  end
end