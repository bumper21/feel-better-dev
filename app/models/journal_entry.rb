class JournalEntry < ApplicationRecord
  belongs_to :user

  validates :feeling, presence: { message: 'must select a value' },
            numericality: { only_integer: true }

  validates :body, presence: true,
            uniqueness: { message: 'has already been saved'},
            length: { minimum: 5 }
end
