require 'rails_helper'

RSpec.describe User, type: :model do
  describe ".full_name" do
    it "returns the first and last name concatenated" do
      u = User.new({first_name: "John", last_name: "Smith"})
      expect(u.full_name).to eq("John Smith")
    end
  end

  describe ".username" do
    it "requires username" do
      u = User.new
      u.valid?
      expect(u.errors.messages).to have_key(:username)
    end
  end
end
