class Exercise < ApplicationRecord
  belongs_to :user

  has_many :favorite_exercises, dependent: :destroy
  has_many :fans, through: :favorite_exercises, source: :user

  validates :title, presence: true,
  uniqueness: { message: 'Title must be unique!'}
  validates :body, presence: true,
  length: { minimum: 10 }
end
