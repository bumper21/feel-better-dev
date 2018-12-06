class JournalEntry < ApplicationRecord
  belongs_to :user

  validates :feeling, presence: true, numericality: {
    greater_than: -5
}


  validates :body, presence: true,
            length: { minimum: 5 }
end
