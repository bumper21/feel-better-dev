class User < ApplicationRecord
  has_many :exercises
  has_many :journal_entries, dependent: :destroy
  # Not adding a dependent nullify or destroy as only Admin's
  # will be able to add exercises. I don't want the exercises #disappearing even if the
  # associated admin is removed.

  has_many :favorite_exercises, dependent: :destroy
  has_many :favorited_exercises, through: :favorite_exercises, source: :exercise
  
  has_secure_password
  
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

  
  validates :email, presence: true,
                    uniqueness: true,
                    format: VALID_EMAIL_REGEX

  def full_name
    "#{first_name} #{last_name}".strip
  end
  
end
