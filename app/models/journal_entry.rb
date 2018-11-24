class JournalEntry < ApplicationRecord
  belongs_to :user

  validates :feeling, presence: true
  validates :body, presence: true,
            length: { minimum: 5 }
end
