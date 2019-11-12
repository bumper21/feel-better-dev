require 'rails_helper'

RSpec.describe User, type: :model do
  user = User.where(last_name: "Scholz")
  describe ".full_name" do
    it "returns the first and last name concatenated" do
      u = User.create({first_name: "John", last_name: "Smith"})
      expect(u.full_name).to eq("John Smith")
    end
  end

  describe ".username" do
    it "validates presence of username" do
      u = User.create({email: "testin122gmail.com", password: "123456secret"})
      u.valid?
      expect(u.errors.messages).to have_key(:username)
    end

    it "validates uniqueness of username" do
      u = User.create({username: "bumper21", email: "testing123@gmail.com", password: "thisIsaPassword"})
      u.valid?
      puts u
      expect(u).to be_valid
    end

    it "validates presence of email" do
      u = User.create({email: "testing123@gmail.com"})
      u.valid?
      expect(u.errors.messages).to_not have_key(:email)
    end

    # it "raises error if email not present" do

    # end
  end
end
