class User < ApplicationRecord
  has_secure_password

  validates :first_name, presence: true
  # validates :email, presence: true,
  #                   uniqueness: true,
  #                   format: VALID_EMAIL_REGEX

  def full_name
    "#{first_name} #{last_name}".strip
  end
end
