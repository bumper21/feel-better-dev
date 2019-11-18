require 'rails_helper'

RSpec.describe User, type: :model do
  describe ".full_name" do
    it "returns the first and last name concatenated" do
      u = User.new({first_name: "John", last_name: "Smith"})
      expect(u.full_name).to eq("John Smith")
    end
  end

  describe "validations" do
    u = User.new(email: "testing222@gmail.com", password: "supersecret")
    it "validates presence of username" do
      u.username = "shawny3"
      expect(u).to be_valid
    end

    it "validates no username is present" do
      u.username = nil
      u.save
      expect(u.errors.messages).to include(:username)
    end

    it "validates uniqueness of username" do
      u.username = "shawny33333"
      expect(u).to be_valid
    end

    it "validates email has proper format" do
      expect(u).to be_valid
    end

    it "validates email has improper format" do
      u.email = "testgmail.com"
      u.save
      expect(u.errors.messages).to include(:email)
    end
  end
end
