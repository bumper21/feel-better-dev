
Exercise.delete_all
JournalEntry.delete_all
User.delete_all

PASSWORD = "secret"
NUM_OF_EXERCISES = 25

super_user = User.create(
  first_name: "Dan",
  last_name: "Scholz",
  username: "bumper21",
  email: "bumper21@gmail.com",
  password: PASSWORD,
  admin: true
)

admin1 = User.where(admin: true).last

NUM_OF_EXERCISES.times do
  e = Exercise.create(
    title: Faker::GreekPhilosophers.name,
    body: Faker::GreekPhilosophers.quote,
    user: admin1,
  )
end

10.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  username = Faker::DragonBall.character

  u = User.create(
    first_name: first_name,
    last_name: last_name,
    username: username,
    email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
    password: PASSWORD
  )
end

users = User.all

NUM_OF_JOURNAL_ENTRIES = 30

NUM_OF_JOURNAL_ENTRIES.times do
  j = JournalEntry.create(
    body: Faker::FamousLastWords.last_words,
    feeling: rand(1..10),
    user: users.sample,
  )
end


puts ("Generated #{User.count} users")
puts ("Generated #{JournalEntry.count} journal entries")
puts ("Generated #{Exercise.count} exercises")